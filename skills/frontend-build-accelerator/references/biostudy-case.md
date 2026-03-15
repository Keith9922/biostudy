# BioStudy Case

## 目标

把一个普通前端模板，重构成一个可上线的研究型生物留学品牌站，并部署到 GitHub Pages。

页面目标：

- 强化专业感
- 体现研究型申请逻辑
- 有克制但明显的高级感
- 支持静态导出与 GitHub Pages

## 最终技术栈

- `Next.js 15.5.7`
- `React 19`
- `Tailwind CSS 3`
- `Framer Motion`
- `GSAP + ScrollTrigger`
- `Lucide React`
- `next/image`
- `next/font/google`
- `Playwright`
- `GitHub Actions + GitHub Pages`

## 核心文件映射

### 页面和内容

- `app/page.tsx`
  页面主编排，按 section 组织 Hero、能力、流程、结果、FAQ、CTA
- `lib/site-data.ts`
  所有卡片、FAQ、统计、流程、导航、页脚链接都走数据配置

### 风格系统

- `app/globals.css`
  控制颜色、背景、版式、间距、阴影、材质、hover 细节
- `tailwind.config.ts`
  定义字体和设计 token 扩展

### 动画系统

- `components/landing/reveal.tsx`
  全站 section reveal
- `components/landing/site-header.tsx`
  移动端菜单展开/收起、滚动态 header
- `components/landing/hero-scene.tsx`
  Hero 的浮动卡片、视差、主视觉进场

### 静态站点与子路径

- `next.config.mjs`
  `output: "export"`、`basePath`、`assetPrefix`
- `lib/site-config.ts`
  `siteUrl` 和 `withBasePath`
- `app/layout.tsx`
  metadata、icons、twitter、open graph
- `app/manifest.ts`
  PWA manifest
- `components/pwa-register.tsx`
  注册 service worker
- `public/sw.js`
  静态缓存

## 快速落地网页的方法

### 1. 先换成可控的静态导出架构

不是在旧模板上不停修，而是先把页面落到 Next App Router + static export：

- 页面结构更清楚
- metadata 和 PWA 更好做
- GitHub Pages 更稳定

### 2. 内容和视图分离

把卡片、流程、FAQ、结果、导航全部抽到 `lib/site-data.ts`，这样能很快改主题，不用每次都在 JSX 里翻找大段文案。

### 3. 图像本地化

首屏和功能区使用本地 SVG：

- `hero-command-center.svg`
- `mentor-cloud.svg`
- `offer-radar.svg`
- `material-governance.svg`

这样做的收益：

- 风格统一
- 构建稳定
- GitHub Pages 下不会被第三方资源拖垮

### 4. 先做版式，再做动画

落地顺序是：

1. section 骨架
2. 文案和信息层级
3. 背景、材质、间距
4. Hero 主视觉
5. reveal 和 hover
6. 滚动和浮动细节

这能避免“动画很多，但页面结构还没成立”的常见问题。

## 动画实现方案

### 一、Framer Motion

负责：

- section 进入视口时的 reveal
- 移动端导航展开和退出
- 个别卡片的初始入场

优点：

- 写法简洁
- 对 React 组件友好
- 适合中轻量页面动效

### 二、GSAP + ScrollTrigger

负责：

- Hero 主视觉的统一进场
- 浮窗缓慢上下漂浮
- Hero 内部卡片的 scroll parallax

优点：

- 对时间轴和滚动联动控制更细
- 很适合复杂视觉区域

### 三、CSS Transition

负责：

- hover 抬升
- 图片微缩放
- 图标微旋转
- 阴影/边框/背景透明度变化

优点：

- 成本低
- 性能稳定
- 适合高频交互反馈

## 这次踩过的关键坑

### 1. Turbopack 样式异常

开发环境里，`next dev --turbopack` 曾因为样式链路问题触发 `500`。处理策略是：

- 默认开发先走稳定的 `next dev`
- Turbopack 单独排查，不阻塞页面交付

### 2. GitHub Pages 子路径资源 404

现象：

- 线上页面能打开
- 但多张 SVG 和 icon 404

根因：

- 页面部署在 `/biostudy/`
- 图片和图标还在用根路径 `/xxx.svg`

修复点：

- `app/page.tsx`
- `components/landing/hero-scene.tsx`
- `app/layout.tsx`
- `app/manifest.ts`
- `public/sw.js`
- `lib/site-config.ts`

验证方式：

- Playwright 打开线上 URL
- 看 `network` 中静态资源是否变成 `/biostudy/xxx.svg`
- 确认 `console` 为 0 error

## 适合复用的标准流程

以后做类似项目前，可以直接套这个顺序：

1. 明确风格和叙事
2. 搭 Next + Tailwind 静态导出骨架
3. 先把内容抽成数据配置
4. 本地化 SVG 资源
5. 用 Framer Motion 做 reveal
6. 用 GSAP 只强化 Hero
7. 用 CSS 统一 hover 语言
8. 用 Playwright 做浏览器和资源回归
9. 部署前检查 base path、icon、manifest、OG、service worker

## 验证命令

```bash
pnpm typecheck
pnpm build
pnpm dev
```

GitHub Pages 环境建议额外验证：

```bash
NEXT_PUBLIC_BASE_PATH=/biostudy NEXT_PUBLIC_SITE_URL=https://keith9922.github.io/biostudy pnpm build
```
