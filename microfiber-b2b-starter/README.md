# Microfiber B2B Website Starter

这是一个可直接推送到 GitHub、导入 Vercel 的 B2B 超纤材料官网基础框架。

当前版本的目标不是公开上线，而是先把以下基础搭好：

- 首页信息层级
- Materials、Applications、Custom Development 等核心路由
- 鞋履、箱包、饰品、安全防护、家具的分层表达
- 默认 `noindex`，防止未完成内容被搜索引擎收录
- 客户、证书、测试和工厂声明的发布边界
- GitHub Actions 自动检查
- Vercel 部署准备

详细的 GitHub、域名、Vercel 操作手册见 [SETUP-GUIDE-ZH.md](./SETUP-GUIDE-ZH.md)。

## 技术栈

- Next.js App Router
- TypeScript
- Tailwind CSS 4
- pnpm
- ESLint

## 本地运行

先安装 Node.js 20.9 或以上版本，以及 pnpm。

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

浏览器打开：

```text
http://localhost:3000
```

## 完整检查

```bash
pnpm check
```

它会依次执行：

1. 占位内容和高风险声明扫描
2. ESLint
3. TypeScript 检查
4. Next.js 生产构建

## 最先修改的文件

### 1. 品牌和页面内容

编辑：

```text
src/content/site.ts
```

替换：

- `YOUR BRAND`
- 首页定位
- 导航
- 行业分类
- 页面说明
- 真实联系信息

### 2. 公司事实

编辑：

```text
docs/source-of-truth.md
```

只有经过公司确认的事实才能进入网站。

### 3. 视觉

编辑：

```text
src/app/globals.css
```

真实图片以后放入：

```text
public/images/
```

不要把未脱敏证书、客户文件、订单、邮件或内部报告放入 `public/`。`public/` 中的文件可被任何访客直接访问。

## 环境变量

复制 `.env.example` 为 `.env.local`：

```text
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_SITE_INDEXING=false
NEXT_PUBLIC_FRAMEWORK_PREVIEW=true
NEXT_PUBLIC_CONTACT_EMAIL=
NEXT_PUBLIC_CONTACT_PHONE=
```

规则：

- 本地 `.env.local` 不上传 GitHub。
- API Key、SMTP 密码、CRM Token 不能有 `NEXT_PUBLIC_` 前缀。
- 网站内容未被你全部核验前，保持 `NEXT_PUBLIC_SITE_INDEXING=false`。
- 所有占位内容替换完成后，才把 `NEXT_PUBLIC_FRAMEWORK_PREVIEW=false`。

## 内容上线流程

```text
资料收集
→ 你把来源登记到 docs/source-of-truth.md
→ 你对照原始测试报告、证书和授权文件核验
→ 你确认哪些资料可以公开
→ 写入网站内容
→ PR 预览
→ 你在手机和电脑上自行验收
→ 合并 main
→ 自动发布
```

这是单人工作流，不需要 Reviewer 或第二名员工。客户 Logo、合作品牌、证书、测试结论等高风险内容，只有在你手中有可核验原件和公开授权时才能发布。

## 当前明确未实现

- 可提交的询盘表单
- 邮件或 CRM 集成
- 客户 Logo
- 具体产品 SKU
- 证书和测试报告下载
- 意大利语版本
- CMS 后台

这些功能需要真实资料、服务账号和端到端测试后再添加。框架中不会放一个看似可提交但实际会丢失数据的假表单。

## Git 分支流程

```bash
git switch main
git pull --ff-only
git switch -c feat/update-homepage-copy

pnpm check

git add src docs public
git commit -m "feat: update approved homepage copy"
git push -u origin feat/update-homepage-copy
```

然后在 GitHub 创建 Pull Request，不指定 Reviewer。等自动检查通过后，由你自己检查 Vercel Preview，再合并到 `main`。
