# GitHub、域名和服务器搭建手册

> 适用项目：公司 B2B 超纤材料官网  
> 适用方式：由你一个人完成制作、发布和维护  
> 核对日期：2026-10-26  
> 推荐路线：GitHub 公司私有仓库 + Vercel Pro + `.com` 域名

本手册从现在起全部按“单人建站”编写。你不需要第二名员工、第二位 Owner、团队分组或他人审批。文中所说的 GitHub Organization 和 Vercel Team 是公司资产的存放空间，不代表必须有多人参加。

## 0. 最终要搭成什么

```text
你唯一的 GitHub 个人账号
        ↓ 创建并管理
单人公司 GitHub Organization
        ↓ 拥有
Private 网站仓库
        ↓ 自动构建
单人公司 Vercel Pro Team
        ↓ 运行网站、CDN、HTTPS
www.公司域名.com
```

第一阶段不需要另外购买传统 VPS、Linux 主机、宝塔面板或数据库服务器。

Vercel 已承担：

- 构建 Next.js
- 全球托管
- CDN
- HTTPS 证书
- 每个 Pull Request 的预览网址
- 合并 `main` 后自动发布
- 后续表单 Function

Vercel Hobby 只适合个人非商业项目；公司商业网站应使用 Pro 或 Enterprise。公司 GitHub Organization 中的私有仓库同样不应按个人 Hobby 路线部署。以 [Vercel Fair Use](https://vercel.com/docs/limits/fair-use-guidelines)、[Vercel Plans](https://vercel.com/docs/plans)和[Vercel Git 部署说明](https://vercel.com/docs/git)为准。

当前 Vercel Pro 从每月 20 美元起，用量、席位和税费以[Vercel 当前价格页](https://vercel.com/pricing)结账显示为准。

---

# 第一部分：公司账号归属

建站前建立一张只供你维护的公司账号登记表：

| 服务 | 资产归属 | 单人配置 |
|---|---|---|
| GitHub Organization | 公司 | 你是唯一 Owner |
| Vercel Team | 公司 | 你是唯一 Owner |
| 域名注册商 | 公司 | 你是唯一管理员，公司为注册人 |
| DNS | 公司 | 你是唯一管理员 |
| 企业邮箱 | 公司 | 你是唯一管理员 |
| CRM | 公司 | 需要时再开，你是唯一管理员 |
| Search Console | 公司 | 上线后再开，你是唯一管理员 |

要求：

- 只创建你自己实际使用的账号，不创建虚构员工账号，也不共享登录密码。
- 优先使用你可长期控制的公司邮箱和手机号；企业邮箱尚未开通时，可先用你长期控制且已开启 2FA 的邮箱，开通企业邮箱后再更新账单和通知邮箱。
- 使用公司付款方式并保留发票。
- 你是唯一 Owner，因此所有账号都必须开启 2FA/MFA，并尽量同时设置 TOTP 和 Passkey/安全密钥。
- 恢复码一份存加密密码管理器，一份打印后放在安全的离线位置；不要把两份放在同一台电脑或同一个云盘。
- 每月把代码仓库备份到加密硬盘；每季度检查恢复码、付款方式、自动续费和通知邮箱是否仍有效。
- 记录购买日期、续费日期、账号入口和恢复方式。

---

# 第二部分：注册 GitHub

## 1. 注册你唯一的 GitHub 个人账号

GitHub 的登录账号代表一个真实使用者，因此你只注册一个由自己使用的个人账号；公司的代码则放进 Organization。正确结构是：

```text
你的个人 GitHub 账号
        ↓ 创建
单人公司 Organization
        ↓ 拥有
Private 网站仓库
```

操作：

1. 打开 [GitHub 注册页](https://github.com/signup)。
2. 使用本人长期可控的公司工作邮箱。
3. 设置唯一强密码。
4. 用户名建议使用稳定的个人英文名或工作 ID。
5. 完成邮箱验证码。
6. 登录 GitHub。

官方说明：[创建 GitHub 账号](https://docs.github.com/en/account-and-profile/how-tos/account-management/creating-an-account-on-github)。

## 2. 立即开启 2FA

路径：

```text
右上角头像
→ Settings
→ Password and authentication
→ Two-factor authentication
→ Enable two-factor authentication
```

建议：

- 优先使用 TOTP 身份验证器。
- 再增加 Passkey 或硬件安全密钥。
- 不要只依赖短信。
- 下载恢复码。
- 不要把恢复码发到微信群、普通邮箱或相册。

官方说明：[GitHub 2FA](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)和[恢复方式](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods)。

## 3. 创建公司 Organization

路径：

```text
右上角头像
→ Settings
→ Organizations
→ New organization
```

操作：

1. 初期可选择 GitHub Free。
2. Organization 名称使用公司或品牌的稳定英文名。
3. 账单邮箱填写公司邮箱。
4. 完成创建向导。
5. 进入 Organization → People，确认目前只有你一个成员，角色是 Owner。
6. 进入 Organization → Settings → Billing and plans，核对公司账单邮箱。
7. 暂时不要邀请其他成员，也不需要购买额外席位。

单人模式的主要风险不是“缺少第二位员工”，而是你丢失唯一账号。因此必须完成上一节的 2FA、Passkey/安全密钥、恢复码和离线代码备份。参见[创建 Organization](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)和[Organization 最佳实践](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/best-practices-for-organizations)。

## 4. 单人 Organization 设置

路径：

```text
Organization
→ Settings
```

现在不建立 `developers`、`marketing-content`、`external-agency` 等团队，它们对一个人没有作用。只做以下设置：

- People：只有你一个 Owner。
- Member privileges → Base permissions：设为 `None`，为以后可能加入协作者预留最小权限。
- Third-party application access：只授权你实际使用的 GitHub Desktop、Codex 和 Vercel。
- Installed GitHub Apps：定期删除不用的 App。
- Billing：开启账单邮件，通知发到你自己持续使用的邮箱。

以后真的请外包时，再只给指定仓库权限；现在无需提前建空团队或购买席位。

## 5. 核对唯一账号的恢复能力

你已经在第 2 步给自己的 GitHub 账号开启 2FA。再逐项确认：

- TOTP 验证器可以正常生成验证码。
- 至少再添加一个 Passkey 或硬件安全密钥。
- 恢复码可以在不登录 GitHub 的情况下找到。
- GitHub 主邮箱和备份邮箱均已验证。
- 手机、电脑或安全密钥丢失时，你仍有另一种恢复路径。

Organization 的“Require two-factor authentication”可以开启，但因为目前只有你一个成员，它不能替代你自己的恢复措施。以后添加协作者时，再在对方已开启 2FA 后强制执行。官方步骤见[Organization 强制 2FA](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization)。

---

# 第三部分：把本框架放到 GitHub

本项目文件夹名：

```text
microfiber-b2b-starter
```

正式使用时可以改成：

```text
company-website
```

## 路线 A：使用命令行，推荐

### 1. 在 GitHub 创建空仓库

路径：

```text
GitHub 右上角 +
→ New repository
```

填写：

- Owner：选择公司 Organization，不能选个人账号。
- Repository name：`company-website`。
- Visibility：Private。
- 不勾选 Add a README。
- 不添加 `.gitignore`。
- License 选择 None。

这里创建空仓库，因为本框架已经包含 README 和 `.gitignore`。

官方说明：[创建仓库](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)。

### 2. 安装软件

在电脑上安装：

- Git
- Node.js LTS
- pnpm
- Codex Desktop

安装 Node.js 后，可在终端检查：

```bash
node --version
```

启用 pnpm：

```bash
corepack enable
corepack prepare pnpm@latest --activate
pnpm --version
```

### 3. 设置 Git 身份

```bash
git config --global user.name "你的姓名"
git config --global user.email "你的公司邮箱"
```

### 4. 初始化并推送

进入本项目目录：

```bash
cd /你的实际路径/microfiber-b2b-starter
```

安装并检查：

```bash
pnpm install
cp .env.example .env.local
pnpm check
```

初始化 Git：

```bash
git init -b main
git add .
git commit -m "chore: initialize company website"
```

复制 GitHub 空仓库页面上的 HTTPS 地址，然后：

```bash
git remote add origin https://github.com/你的公司组织/company-website.git
git push -u origin main
```

如果 GitHub 要求登录，使用浏览器授权、GitHub CLI 或 GitHub Desktop，不要把账号密码写入脚本。

## 路线 B：使用 GitHub Desktop

如果不熟悉命令行：

1. 安装 GitHub Desktop。
2. 登录个人 GitHub 账号。
3. File → Add Local Repository。
4. 选择 `microfiber-b2b-starter` 文件夹。
5. 如果提示这不是 Git 仓库，点击 Create a Repository。
6. Name 填 `company-website`。
7. Local path 保持当前项目文件夹。
8. 创建本地仓库。
9. 点击 Publish repository。
10. Owner 选择公司 Organization。
11. 勾选 Keep this code private。
12. 点击 Publish Repository。

选择 GitHub Desktop 路线时，不要提前在网页上再创建一个同名远程仓库。

## 6. 分支保护

项目初期完成第一次推送后：

```text
Repository
→ Settings
→ Rules
→ Rulesets
→ New ruleset
→ New branch ruleset
```

建议：

- Target：默认分支 `main`。
- Require a pull request before merging。
- Required approvals 设为 `0`；单人项目不要设置“必须由他人批准”，否则你会锁住自己的合并流程。
- Require status checks to pass。
- Require conversation resolution。
- Block force pushes。
- Restrict deletions。

你仍然使用 Pull Request，但它的作用是让你自己查看 Vercel Preview、自动检查和改动记录，不是等待第二个人审批。

私有仓库部分治理功能与 GitHub 套餐有关。如果当前 Free 套餐不支持所需规则，可以先使用 Pull Request 工作流，再评估 GitHub Team。参见 [GitHub Plans](https://docs.github.com/en/get-started/learning-about-github/githubs-plans)和 [Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets)。

---

# 第四部分：购买 `.com` 域名

## 1. 先准备 3–5 个候选域名

原则：

- 尽量短。
- 容易拼写。
- 容易在电话和展会上说清楚。
- 优先品牌名，不要堆关键词。
- 尽量不用连字符和数字。
- 查询中、美、欧商标冲突。
- 检查域名过去是否被用于垃圾网站。

购买前逐字核对。域名注册成功后，通常不能因为拼错退款或修改成另一个名字。

## 2. 推荐选择

### 中国大陆公司推荐

使用腾讯云或阿里云企业账号购买 `.com`：

- 中文后台。
- 人民币付款和发票方便。
- 企业实名方便。
- 为未来中国大陆 ICP 备案保留条件。

### 纯海外运营选择

可以使用 Cloudflare Registrar：

- 国际化后台。
- 域名和 DNS 在同一平台。
- 必须使用 Cloudflare Nameserver。

两种方案二选一，不要重复购买同一个域名，也不要在多个平台同时乱改 DNS。

## 3A. 腾讯云购买步骤

1. 用公司控制的手机号和邮箱注册腾讯云。
2. 完成企业账号实名认证。
3. 打开域名注册控制台。
4. 进入信息模板。
5. 点击新建域名实名信息模板。
6. 所有者类型选择企业。
7. 企业名称必须与营业执照完全一致。
8. 上传清晰完整的营业执照等材料。
9. 等待信息模板审核通过；官方说明通常需要 1–3 个工作日。
10. 在域名注册页搜索完整的 `.com` 域名。
11. 加入购物车。
12. 选择已审核的企业信息模板。
13. 选择注册年限。
14. 开启自动续费。
15. 再次逐字核对域名。
16. 使用公司付款方式付款。

官方步骤：[腾讯云域名注册](https://cloud.tencent.com/document/product/242/9595)、[域名实名认证](https://cloud.tencent.com/document/product/242/6707)、[购买说明](https://cloud.tencent.com/document/product/242/18873)。

购买后：

- 开启腾讯云 MFA。
- 开启禁止转移锁。
- 开启禁止更新锁。
- 确认自动续费。
- 确认公司联系人邮箱和电话正确。
- 保存付款和所有权证明。

参见[腾讯云 MFA](https://cloud.tencent.com/document/product/378/12036)、[域名安全保护](https://intl.cloud.tencent.com/zh/document/product/242/42864)和[自动续费](https://cloud.tencent.com/document/product/242/10525)。

## 3B. Cloudflare Registrar 购买步骤

1. 创建 Cloudflare 公司账号。
2. 验证邮箱。
3. My Profile → Authentication。
4. 添加 TOTP 和安全密钥或 Passkey。
5. 保存备份码。
6. Dashboard → Register domains。
7. 搜索完整域名。
8. 点击 Purchase。
9. 选择注册年限。
10. 填写真实联系人；联系人字段按 Cloudflare 要求使用 ASCII 字符。
11. 添加公司付款方式。
12. 确认并完成购买。
13. 立即完成 ICANN registrant 邮箱验证。

没有及时验证邮箱可能导致域名暂停。官方步骤见 [Cloudflare 注册域名](https://developers.cloudflare.com/registrar/get-started/register-domain/)。

购买后：

- 确认 Auto-renew 开启。
- 保持付款方式有效。
- 开启 DNSSEC。
- 确认你自己的 2FA、Passkey/安全密钥和备份码均可用。
- 导出或截图保存当前 DNS 记录，作为误操作后的恢复备份。

参见 [Cloudflare 2FA](https://developers.cloudflare.com/fundamentals/user-profiles/2fa/)、[自动续费](https://developers.cloudflare.com/registrar/account-options/renew-domains/)和 [DNSSEC](https://developers.cloudflare.com/registrar/get-started/enable-dnssec/)。

注意：Cloudflare Registrar 的域名必须使用 Cloudflare Nameserver，但仍然可以指向 Vercel。

---

# 第五部分：注册 Vercel 和部署

## 1. 注册你唯一的 Vercel 账号

1. 打开 [Vercel 注册页](https://vercel.com/signup)。
2. 点击 Continue with GitHub。
3. 登录刚注册的个人 GitHub 账号。
4. 完成授权。
5. 右上角头像 → Settings → Authentication。
6. 开启 2FA。
7. 保存恢复码。
8. 可再添加 Passkey。

官方说明：[Vercel Accounts](https://vercel.com/docs/accounts)和 [Vercel 2FA](https://vercel.com/docs/two-factor-authentication)。

## 2. 创建单人公司 Team

路径：

```text
左上角 Team switcher
→ Create a new team
```

操作：

1. Team 名称使用公司或品牌名。
2. 选择 Pro。
3. 使用公司账单邮箱和公司付款方式。
4. 创建完成后确认 Team 中只有你一个 Owner。
5. 不邀请第二名成员，不购买额外席位。

Vercel 把公司资产空间称为 Team，即使成员只有你一个也可以这样使用。生产项目放在这个单人 Pro Team 中，不放在个人 Hobby scope。

## 3. 导入 GitHub 仓库

1. 左上角确认当前选择的是公司 Team。
2. 点击 Add New… → Project。
3. 点击 Configure GitHub App。
4. 选择公司 GitHub Organization。
5. 选择 Only select repositories。
6. 只授权 `company-website`。
7. 返回 Vercel。
8. 找到仓库并点击 Import。
9. Framework Preset 应自动识别 Next.js。
10. Root Directory 保持 `./`。
11. Build Command 和 Output Directory 保持框架默认值。
12. 点击 Deploy。
13. 等待状态变成 Ready。
14. 打开自动生成的 `*.vercel.app` 地址测试。

官方说明：[Vercel Projects](https://vercel.com/docs/projects/managing-projects)和 [Git 自动部署](https://vercel.com/docs/git)。

## 4. 配置环境变量

路径：

```text
Project
→ Settings
→ Environment Variables
```

初期添加：

```text
NEXT_PUBLIC_SITE_URL=https://你的最终主域名
NEXT_PUBLIC_SITE_INDEXING=false
NEXT_PUBLIC_FRAMEWORK_PREVIEW=true
NEXT_PUBLIC_CONTACT_EMAIL=经过确认的公司邮箱
NEXT_PUBLIC_CONTACT_PHONE=经过确认的公司电话
```

范围：

- Production。
- Preview。
- Development 可按需配置。

网站内容没有完成前：

- `NEXT_PUBLIC_SITE_INDEXING=false`
- `NEXT_PUBLIC_FRAMEWORK_PREVIEW=true`

你自己完成最终上线检查后再改为：

```text
NEXT_PUBLIC_SITE_INDEXING=true
NEXT_PUBLIC_FRAMEWORK_PREVIEW=false
```

修改环境变量后需要重新部署，新值不会自动影响已有部署。

## 5. Vercel 安全和费用

### 确认你自己的 2FA

```text
右上角头像
→ Settings
→ Authentication
```

确认 TOTP、Passkey/安全密钥和恢复码都可用。Team 级别的 2FA Enforcement 可以开启，但现在 Team 只有你一人，最关键的是你的唯一登录账号本身已启用 2FA。官方说明：[Vercel 2FA](https://vercel.com/docs/two-factor-authentication)和 [Vercel Team 2FA](https://vercel.com/docs/two-factor-enforcement)。

### 保护预览环境

```text
Project
→ Settings
→ Deployment Protection
→ Standard Protection
```

使 Preview 需要授权访问，生产域名仍可公开。官方说明：[Deployment Protection](https://vercel.com/docs/deployment-protection)。

### 设置费用提醒

```text
Team Settings
→ Billing
→ Spend Management
```

设置：

- 费用提醒阈值。
- 接收通知的邮箱填写你自己持续查看的邮箱。
- 是否达到阈值后暂停生产部署。

如果开启自动 Pause，额度达到后网站可能返回 503，因此阈值不要设得过低。参见 [Spend Management](https://vercel.com/docs/spend-management)。

---

# 第六部分：把域名连接到 Vercel

## 1. 先在 Vercel 添加域名

路径：

```text
Vercel Dashboard
→ 选择项目
→ Settings
→ Domains
```

依次添加：

```text
yourdomain.com
www.yourdomain.com
```

选择一个作为主域。例如：

```text
www.yourdomain.com
```

让根域：

```text
yourdomain.com
```

永久跳转到主域。

Vercel 会显示该项目当前需要的精确 DNS 记录。不要照抄旧博客中的固定 IP 或 CNAME，以 Vercel 项目当前界面为准。官方步骤：[Vercel 自定义域名](https://vercel.com/docs/domains/set-up-custom-domain)。

## 2A. 域名在腾讯云/DNSPod

路径：

```text
云解析 DNS 控制台
→ 权威解析
→ 点击目标域名
→ 添加记录
```

按照 Vercel 页面给出的值添加。常见形式是：

- 根域：主机记录 `@`，类型 `A`，记录值用 Vercel 显示值。
- `www`：主机记录 `www`，类型 `CNAME`，记录值用 Vercel 显示值。
- Vercel 要求所有权验证时，添加对应 TXT。

官方说明：[腾讯云快速添加解析](https://cloud.tencent.com/document/product/302/3446/)和 [CNAME 记录](https://cloud.tencent.com/document/product/302/3450)。

## 2B. 域名在 Cloudflare

路径：

```text
Cloudflare Dashboard
→ 选择域名
→ DNS
→ Records
→ Add record
```

按照 Vercel 页面当前值填写。初期把网站 A/CNAME 的 Proxy status 设置为：

```text
DNS only（灰云）
```

这样最容易验证域名、签发证书和排错。Vercel 不建议在前面重复叠加不必要的反向代理或 CDN。参见[Vercel 外部代理说明](https://vercel.com/kb/guide/can-i-use-a-proxy-on-top-of-my-vercel-deployment)和[Cloudflare DNS 记录](https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/)。

## 3. 不要误删邮箱记录

添加网站记录时，不要删除：

- MX
- SPF TXT
- DKIM TXT/CNAME
- DMARC TXT

网站和企业邮箱共享同一个 DNS 区域，但记录用途不同。

## 4. 清理冲突

同一个主机名不要同时保留互相冲突的：

- A
- AAAA
- CNAME
- 域名停放记录
- 旧服务器记录

只删除与网站主机名冲突的旧记录，不要一次性清空整个 DNS。

## 5. 验证

1. 回到 Vercel Settings → Domains。
2. 点击 Refresh 或重新检查。
3. 等待状态变为 Valid Configuration。
4. 等待 HTTPS 证书自动签发。
5. 测试 `https://yourdomain.com`。
6. 测试 `https://www.yourdomain.com`。
7. 确认一个打开，另一个永久跳转到主域。
8. 检查企业邮箱仍能正常收发。

DNS 可能几分钟生效，也可能需要更长时间全球传播。等待期间不要反复更改记录。

---

# 第七部分：日常开发和发布

不要直接在 `main` 上开发。

```bash
git switch main
git pull --ff-only
git switch -c feat/add-approved-products
```

修改内容后：

```bash
pnpm check
git add src docs public
git commit -m "feat: add approved product content"
git push -u origin feat/add-approved-products
```

然后：

1. GitHub 创建 Pull Request；不需要指定 Reviewer。
2. 等 GitHub Actions 检查通过。
3. 打开 Vercel Preview。
4. 检查手机和电脑。
5. 检查产品参数和英文。
6. 检查是否存在未授权客户或证书内容。
7. 由你自己完成检查后合并到 `main`。
8. Vercel 自动部署生产。

出现问题时：

- 在 Vercel 恢复上一版已验证的 Deployment；或
- Git revert 问题提交并重新合并。

不要在生产网页上临时直接改文件。

---

# 第八部分：中国大陆备案说明

域名是否需要 ICP 备案，主要取决于服务器是否位于中国内地，不取决于域名在哪里买。

- 指向 Vercel 等海外基础设施：通常不走中国内地 ICP 备案路线。
- 指向中国内地服务器或大陆 CDN：必须先备案。

腾讯云说明见[是否需要备案](https://cloud.tencent.com/document/product/243/19630/)。

Vercel 没有中国内地托管基础设施或中国监管支持；内地访问可能变慢或偶发不可达。你们当前目标客户是美国和意大利，因此第一阶段可以使用 Vercel，但不要把它描述成“中国大陆加速”。参见 [Vercel 中国大陆访问说明](https://vercel.com/kb/guide/accessing-vercel-hosted-sites-from-mainland-china)。

如果未来明确需要中国大陆站，再单独实施：

1. 中国大陆云资源。
2. ICP 备案。
3. 公安联网备案。
4. 大陆可用的字体、验证码、邮件、分析和 CDN。
5. 三大运营商实测。

不要现在为了美国、意大利网站先购买一台无人维护的 VPS。

---

# 第九部分：最终验收清单

- [ ] 只使用你自己的 GitHub 账号，没有共享账号或虚构员工账号。
- [ ] GitHub 邮箱已验证。
- [ ] 你的 GitHub 账号已开启 2FA，并设置第二种恢复方式。
- [ ] GitHub 恢复码已安全保存。
- [ ] 公司 Organization 只有你一个 Owner。
- [ ] 网站仓库由 Organization 持有。
- [ ] 仓库为 Private。
- [ ] `.env` 和密钥没有提交到 Git。
- [ ] Vercel 项目属于单人公司 Pro Team。
- [ ] Vercel Team 只有你一个 Owner，没有多余付费席位。
- [ ] 你的 Vercel 账号已开启 2FA，恢复码已离线保存。
- [ ] Vercel GitHub App 只授权网站仓库。
- [ ] Preview 已启用访问保护。
- [ ] Spend Management 已设置提醒。
- [ ] 域名注册人是公司。
- [ ] 域名已开启自动续费。
- [ ] 域名已开启 2FA/MFA 和转移锁。
- [ ] 域名通知邮箱和电话有效。
- [ ] 根域和 `www` 都已添加到 Vercel。
- [ ] DNS 值来自 Vercel 当前项目界面。
- [ ] 企业邮箱 MX/SPF/DKIM/DMARC 未被删除。
- [ ] HTTPS 正常。
- [ ] 根域和 `www` 跳转正确。
- [ ] 网站未完成时保持 noindex。
- [ ] `pnpm check` 通过。

## 最常见的错误

1. 公司代码只建在个人 Profile 下，没有放入公司 Organization。
2. 只有一个账号，却没有备用邮箱、Passkey/安全密钥、恢复码和离线代码备份。
3. 域名拼错后才发现。
4. 域名和托管只使用临时邮箱或即将停用的付款方式。
5. 公司商业网站使用个人 Hobby 套餐。
6. 在腾讯云、Cloudflare 和 Vercel 三处同时乱改 DNS。
7. 抄旧教程中的固定 DNS 值。
8. 添加网站记录时误删企业邮箱记录。
9. 把 `.env`、SMTP 密码或 CRM Token 推送到 GitHub。
10. 你尚未完成内容核验就开启搜索引擎收录。
