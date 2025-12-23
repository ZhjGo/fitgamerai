# 体感互动游戏平台 开发与运维文档

本项目是一个基于 Next.js 的体感互动游戏平台，核心功能是通过网页显示摄像头捕捉到的画面，并结合视觉感应技术实现无硬件的游戏交互。

## 1. 技术栈
- **前端框架**：Next.js 15 (App Router)
- **样式**：Tailwind CSS
- **动效**：Framer Motion
- **多语言**：自定义词典适配 (`dictionaries/`)
- **图标**：Lucide React
- **核心交互**：内嵌 HTML5 视觉感应游戏

## 2. 目录结构
```text
├── app/                  # Next.js App 路由
│   └── [lang]/           # 支持多语言的页面路径
├── components/           # UI 组件（Navbar, GlassCard 等）
├── dictionaries/         # 多语言翻译 JSON
├── lib/                  # 工具函数与静态数据 (games.ts)
├── public/               # 静态资源
│   └── games/            # 内嵌游戏根目录
└── types/                # TypeScript 类型定义
```

## 3. 游戏管理说明

### 3.1 游戏目录 (`public/games/`)
该目录包含所有独立的 H5 体感游戏。每个游戏应是一个独立的文件夹，内部包含 `index.html` 以及相关的静态资源（js, css, 资源文件）。
> **注意**：该目录通常从专门的游戏开发项目构建后覆盖而来，本项目仅作为内容的容器和展示平台。

### 3.2 游戏配置 (`lib/games.ts`)
若要向平台添加或修改游戏信息，需要更新 `lib/games.ts` 中的 `games` 数组。
- **id**: 对应 `public/games/` 下的文件夹名称。
- **en/zh**: 分布配置中英文的标题、描述、SEO 关键词及缩略图路径。
- **tags**: 展示在卡片上的标签。

## 4. 多语言适配
翻译文件位于 `dictionaries/` 目录下：
- `zh.json`: 中文翻译
- `en.json`: 英文翻译

修改 UI 文本时，请务必同时更新这两个文件，并在页面中使用 `getDictionary(lang)` 获取对应条目。

## 5. 开发建议
1. **游戏调试**：游戏通过 `iframe` 嵌入，若游戏需要频繁调用摄像头，请确保 `iframe` 的 `allow` 属性包含 `camera`。
2. **样式统一**：本项目采用类 iOS 的毛玻璃效果，建议新组件继续沿用 `GlassCard` 和 `glass-effect` 类名。
3. **部署**：
   - 使用 `npm run build` 生成生产版本。
   - 确保 `public/games` 目录中的静态资源路径正确。

## 6. 运行与维护
- **本地开发**：`npm run dev`
- **构建项目**：`npm run build`
- **运行生产**：`npm start`

## 7. 部署到 Cloudflare Pages

本项目已适配纯静态导出模式，可完美部署在该平台或类似静态主机上。

### 7.1 部署步骤
1. **构建设置**：
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
2. **环境变量**：
   - 本项目目前不需要特殊环境变量。
3. **注意事项**：
   - 静态导出不支持 Next.js Middleware，因此原有的根路径重定向已改为 `app/page.tsx` 中的客户端重定向。
   - 图片优化已通过 `unoptimized: true` 禁用，以兼容静态环境。

### 7.2 常见问题
- **404 错误**：如果直接访问带有语言路径的子页面（如 `/zh/play/xxx`）出现 404，请确保 Cloudflare Pages 的配置支持单页应用（SPA）路由或正确映射静态文件。
