## ⭐ AdminSys-vue3-ts-vite ⭐

<p>
基于 Vue3、vite、Ts 搭建前端 web 开发脚手架；集成 Vue-Router + Vuex + Element Plus + Axios + Sass + Jest + i18n；使用 Eslint + Prettier + editor 代码规范；基于 VueX+Vue-Router 动态化路由。
</p>

<p align="center">
  <img src="https://z3.ax1x.com/2021/09/04/h2zT2D.png" alt="vue">
</p>

## 目录结构 | Directory structure

```
├─ public/                         #
├─ src/                            #
│  ├─ @types/                      #  TS 类型定义
│  ├─ api/                         #  api 管理及 axios 配置
│  ├─ assets/                      #  静态资源目录
│  ├─ common/                      #  通用类库目录
│  ├─ components/                  #  公共组件目录
│  ├─ locales/                     #  i18n 国际化
│  ├─ mixins/                      #  全局混入方法
│  ├─ router/                      #  router 配置目录
│  ├─ store/                       #  vuex 状态管理目录
│  ├─ style/                       #  通用 CSS 目录
│  ├─ utils/                       #  工具函数目录
├─ ├─ views/                       #  页面组件目录
│  │  ├─ layout/                   #  layout 布局文件
│  │  ├─ modules/                  #  模块页面
│  │  ├─ pages/                    #  独立页面
│  │  └─ index.vue                 #  落地页
│  ├─ App.vue                      #  vue 根组件
│  ├─ main.ts                      #  入口文件
│  └─ shims-vue.d.ts               #
├─ tests/                          #  单元测试目录
│  └─ Test.spec.ts                 #  Test 组件测试
├─ index.html                      #  index.html
├─ tsconfig.json                   #  TypeScript 配置文件
├─ vite.config.ts                  #  Vite 配置文件
├─ .editorconfig                   #  EditorConfig 配置
├─ .prettierrc                     #  Prettier 配置
├─ .eslintrc.js                    #  Eslint 配置
└─ package.json                    #  npm 包管理
```

## 代码规范 | Code standards

- EditorConfig 注意</br>
  VSCode 使用 EditorConfig 需要去插件市场下载插件 EditorConfig for VS Code ； </br>
  JetBrains 系列（WebStorm、IntelliJ IDEA 等）则不用额外安装插件，可直接使用 EditorConfig 配置。 </br>

- Prettier 注意</br>
  格式化所有文件（. 表示所有文件）`$ npx prettier --write .`； </br>
  VSCode 编辑器使用 Prettier 配置需要下载插件 Prettier - Code formatter ； </br>
  JetBrains 系列编辑器（WebStorm、IntelliJ IDEA 等）则不用额外安装插件，可直接使用 Prettier 配置。 </br>

- Eslint 注意</br>
  VSCode 在 settings.json 设置文件中，增加以下代码： </br>

```json
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
 }
```

WebStorm 打开设置窗口，搜索 eslint，找到 Language & Frameworks / JavaScript / Code Quality Tools / Eslint </br>
勾选 Automatic Eslint xxxx 和 Run eslint xxxxx，最后点击 Apply -> OK </br>

## 项目启动 | How to start a project

如何启动？

1. 使用 VsCode 或 WebStorm 开发，安装/配置 Eslint、Prettier、EditorConfig

2. 安装开发依赖包：`$ npm install `

运行指令：

- 开发环境启动：`$ npm run dev `

- 项目打包：`$ npm run build `

- 通过 TypeScript 打包：`$ npm run build-tsc `

- 本地预览生产包：`$ npm run serve `

- prettier 格式化：`$ npm run format `

- Eslint 校验：`$ npm run lint `

- Eslint 自动修复：`$ npm run lint-fix `

- 运行 Jest 单元测试：`$ npm run test `

## 正在施工的功能 | Features under development

- [√] Element Plus
- [√] 动态路由
- [√] Layout 配置
- [x] 快速 CRUD
- [x] Tabs 标签页
- [x] Echarts 图表
- [x] QR-Code 二维码生成
- [x] wangEditor 富文本编辑器
- [x] 登录/注册页
- [x] 404 / 403 / 500 / 502
- [x] 系统设置
- [x] 用户管理
- [x] 切换主题色
- [√] i18n 国际化
- [x] 工具函数
