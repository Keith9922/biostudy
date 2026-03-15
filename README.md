# BioStudy

面向生物、神经、生信与公共卫生等方向申请者的研究型留学申请策略站点。

## 本地开发

```bash
pnpm install
pnpm dev
```

默认访问 `http://localhost:8080/`。

## 质量检查

```bash
pnpm typecheck
pnpm test
pnpm build
```

## GitHub Pages 部署

仓库内已经包含：

- CI 工作流：`.github/workflows/ci.yml`
- GitHub Pages 自动部署工作流：`.github/workflows/deploy-pages.yml`

部署方式为 Next.js 静态导出到 `out/`，再通过 GitHub Actions 发布到 GitHub Pages。

首次启用时需要在 GitHub 仓库设置里把 Pages 的 Source 切换到 `GitHub Actions`。
