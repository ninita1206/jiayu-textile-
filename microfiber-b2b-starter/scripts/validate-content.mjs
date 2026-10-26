import { readFile, readdir } from "node:fs/promises";
import { extname, join, relative } from "node:path";

const roots = ["src", "public"];
const checkedExtensions = new Set([".ts", ".tsx", ".js", ".jsx", ".md", ".html", ".json", ".svg"]);
const forbiddenPatterns = [
  { pattern: /lorem ipsum/i, reason: "Lorem ipsum placeholder text" },
  { pattern: /official supplier/i, reason: "Unverified supplier-status claim" },
  { pattern: /trusted by/i, reason: "Unverified customer-trust claim" },
  { pattern: /all products comply/i, reason: "Overbroad compliance claim" },
];

async function collectFiles(directory) {
  let entries;
  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error && error.code === "ENOENT") return [];
    throw error;
  }

  const files = [];
  for (const entry of entries) {
    const fullPath = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await collectFiles(fullPath)));
    if (entry.isFile() && checkedExtensions.has(extname(entry.name))) files.push(fullPath);
  }
  return files;
}

const files = (await Promise.all(roots.map(collectFiles))).flat();
const failures = [];

for (const file of files) {
  const source = await readFile(file, "utf8");
  for (const rule of forbiddenPatterns) {
    if (rule.pattern.test(source)) failures.push(`${relative(process.cwd(), file)}: ${rule.reason}`);
  }
}

if (failures.length) {
  console.error("Content validation failed:\n");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Content validation passed for ${files.length} files.`);
