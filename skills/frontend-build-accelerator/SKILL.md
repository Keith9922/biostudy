---
name: frontend-build-accelerator
description: 快速交付高完成度前端页面的工作流。适用于 Next.js/Tailwind/Framer Motion/GSAP 类官网、落地页和品牌站，覆盖信息架构、视觉落地、动画设计、本地静态资源、GitHub Pages 子路径适配与上线验证。
type: workflow
alwaysApply: false
---

## Purpose

把“一个想法”快速落成“可上线的高完成度前端页面”。

这个 skill 适合官网、品牌站、专题页、产品介绍页，以及需要较强视觉表现和动画节奏的前端任务。重点不是只把页面拼出来，而是用一套稳定流程把内容、视觉、动画、资源路径、部署和回归检查一起做完。

---

## When To Use

在下面这些请求里优先使用这个 skill：

- “把这个前端做得更好看一些”
- “参考某个网站风格，做一个高级一点的 landing page”
- “快速生成一个品牌官网/招生页/活动页/产品页”
- “给页面加动画、交互动效、出场动画”
- “做成可部署到 GitHub Pages / 静态托管的前端页面”
- “把图片、本地 SVG、PWA、OG 一起收好”

不适合的场景：

- 纯业务后台表单、CRUD 页面，没有明显视觉和叙事要求
- 用户只要一个简单组件修复，不需要整页重构
- 任务重点在复杂后端逻辑，不在前端体验

---

## Core Stack

默认优先这套组合，除非项目已有更明确约束：

- **Next.js App Router**：负责页面路由、静态导出、metadata、OG、manifest、sitemap
- **React**：组件化页面结构
- **Tailwind CSS**：快速控制版式、层级、间距、材质感
- **Framer Motion**：做 section reveal、菜单过渡、hover 反馈、轻量进场动画
- **GSAP + ScrollTrigger**：做 Hero 主视觉里的浮动、视差、滚动联动
- **Lucide / SVG**：做图标和高一致性的本地图形资源
- **Playwright**：做真实浏览器验证，包括布局、console、network、图片加载
- **GitHub Pages / 静态导出**：适合轻官网、品牌站、活动页

设计原则：

- 优先 **本地静态 SVG / 本地资源**，不要依赖随机外链图片
- 内容、视觉、动画分层，不把所有逻辑堆进一个组件
- 动画服务于层级和节奏，不服务于炫技

---

## Delivery Workflow

### 1. 定主题与叙事

先锁定 4 件事，再开始写页面：

- 页面目标：转化、展示、招生、品牌、产品介绍
- 用户最关心的问题：为什么找你、你和别人有什么不同、怎么开始
- 页面主线：Hero -> 信任 -> 服务/能力 -> 流程 -> 结果 -> FAQ -> CTA
- 风格关键词：例如“智慧、干净、严谨、克制的高级感”

如果用户给了对标站，只抽取这些东西，不做一比一复制：

- 版面节奏
- 空白使用
- 动画密度
- 材质和光影语气
- 标题气质

### 2. 先搭静态骨架，再加细节

优先把页面拆成稳定结构：

- `app/page.tsx`：页面编排
- `lib/site-data.ts`：文案、卡片、FAQ、流程、统计等内容数据
- `components/landing/*`：Hero、Header、SectionHeading、Reveal、场景图等模块
- `app/globals.css`：全局 tokens、背景、排版、材质、hover 细节

先保证下面这些成立：

- 版面结构清楚
- 标题和段落层级清楚
- section 间距一致
- CTA 明确
- 移动端不炸

### 3. 图形资源优先本地化

图片和图形优先顺序：

1. 自己画 SVG
2. 本地可控素材
3. 必要时再接外部资源

原因：

- 静态导出更稳定
- GitHub Pages / 子路径部署更安全
- 视觉风格更统一
- 不容易出现跨域、失效、热链、压缩异常

所有静态图建议放到 `public/`，并建立统一路径函数，例如：

```ts
export function withBasePath(path: string) {
  if (!path.startsWith("/")) return path;
  if (!basePath) return path;
  return path === "/" ? `${basePath}/` : `${basePath}${path}`;
}
```

### 4. 动画分层设计

不要一上来全站乱飞。动画按 4 层做：

- **Layer 1: section 进场**
  用 `Framer Motion` 做 reveal，解决“页面太死”的问题
- **Layer 2: Hero 主视觉运动**
  用 `GSAP + ScrollTrigger` 做浮动、轻视差、主视觉节奏
- **Layer 3: hover 反馈**
  用 CSS transition 或 Framer Motion 做卡片、按钮、图片轻微响应
- **Layer 4: 导航 / 抽屉 / Accordion**
  用 Framer Motion 或 Radix 自带状态做结构性过渡

节奏规则：

- Hero 动画最强
- 中段 section 进场中等
- hover 动画克制
- 不让浮窗遮挡主视线

### 5. 静态部署适配

如果目标是 GitHub Pages、对象存储或静态 CDN，必须提前收这些：

- `next.config.mjs` 里配置 `output: "export"`
- 子路径部署时配置 `basePath` 和 `assetPrefix`
- `next/image` 静态导出时用 `images.unoptimized = true`
- metadata、manifest、icon、OG 图、PWA 资源都要考虑 base path
- service worker 缓存路径不能写死根路径

### 6. 回归验证

至少做这 5 项：

- `pnpm typecheck`
- `pnpm build`
- 浏览器打开页面看 Hero / CTA / 移动端
- 检查 `console` 是否有报错
- 检查 `network` 是否有 404，尤其是图片、字体、icon、manifest、OG

如果是 GitHub Pages，一定要额外确认：

- 线上 URL 是否带仓库名子路径
- 页面资源是否请求到 `/repo-name/...`
- 本地 `out/` 中的 HTML 是否已经引用了正确路径

---

## Animation Recipes

### Recipe A: Section Reveal

适用于大多数 section：

```tsx
<motion.div
  initial={{ opacity: 0, y: 24, scale: 0.985, filter: "blur(10px)" }}
  whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
  viewport={{ once: true, amount: 0.25 }}
  transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1], delay }}
/>
```

用途：

- 让大段内容滚动进入时更有层次
- 保持轻盈，不影响阅读

### Recipe B: Hero Floating Cards

适用于首屏的辅助信息卡：

```ts
gsap.to("[data-float-card='primary']", {
  y: 6,
  duration: 6.2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});
```

规则：

- 位移很小
- 时间偏长
- 不要大幅横跳
- 卡片位置靠边，不能挡主标题和主图

### Recipe C: Scroll Parallax

适用于 Hero 主图和次级卡片：

```ts
gsap.to(card, {
  y: depth,
  scrollTrigger: {
    trigger: rootRef.current,
    start: "top top+=40",
    end: "bottom top",
    scrub: 0.35,
  },
});
```

规则：

- 只在首屏或关键视觉区域使用
- `scrub` 要小，避免拖泥带水
- 深度差异控制在一个很窄的范围

### Recipe D: Hover Feedback

适用于按钮、卡片、缩略图：

- 轻微上移 `translateY(-2px ~ -4px)`
- 阴影略增强
- 图片 `scale(1.02 ~ 1.03)`
- 图标做小角度旋转或微放大

不要做：

- 大幅缩放
- 高频闪烁
- hover 时版面重排

---

## Architecture Pattern

推荐结构：

```text
app/
  layout.tsx
  page.tsx
  globals.css
  manifest.ts
  sitemap.ts
  robots.ts
components/
  landing/
    hero-scene.tsx
    reveal.tsx
    section-heading.tsx
    site-header.tsx
  ui/
lib/
  site-config.ts
  site-data.ts
public/
  *.svg
  sw.js
```

职责划分：

- `page.tsx` 只负责编排，不塞大量数据常量
- `site-data.ts` 管理内容和卡片数据
- `site-config.ts` 管理站点 URL、base path
- `globals.css` 控制整体风格、排版、背景、hover
- `hero-scene.tsx` 负责首屏最复杂的视觉和运动

---

## Common Pitfalls

### 1. GitHub Pages 图片 404

症状：

- 本地正常
- 线上图片大量 404
- 请求地址变成 `https://domain.com/xxx.svg`，而不是 `https://domain.com/repo/xxx.svg`

原因：

- 页面跑在子路径
- 图片、icon、manifest、OG、PWA 路径没有走 base path

处理：

- 页面图片统一用 `withBasePath`
- `manifest.ts`、`layout.tsx`、`sw.js` 一起检查
- 用 Playwright 的 `network` 明确抓 404

### 2. 动画太乱

症状：

- 浮窗遮挡标题
- hover 反馈太多
- 页面像模板站，不像专业品牌页

处理：

- Hero 之外降低动效密度
- 浮动幅度减小
- 把动画集中在 reveal、hover、导航、Hero 四类

### 3. Turbopack / 样式链路不稳定

如果开发环境出现 Turbopack 样式异常，优先切回稳定 dev server，再单独追 Turbopack 兼容问题。不要为了追一个实验性问题把整个页面交付卡死。

---

## Execution Checklist

- 明确页面主线和风格关键词
- 先做静态骨架和数据结构
- 图形资源本地化
- Reveal / Hero / Hover 三层动画落位
- 处理 base path、icon、manifest、OG、service worker
- `typecheck`、`build`、Playwright 验证
- 部署后检查线上 `console` 和 `network`

---

## References

需要这次 BioStudy 的完整落地案例、文件映射和踩坑记录时，读取：

- `references/biostudy-case.md`
