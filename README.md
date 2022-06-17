# starter-lit-with-tailwind
一个基于vite、lit、tailwindcss的脚手架

## 使用方法
```bash
pnpm i 
pnpm run dev
```

## 难点
由于lit使用的是shadowDOM，样式是隔离的，所以默认不能使用tailwindcss的样式类

## 实现逻辑
继承`LitElement`类，在`connectedCallback`的生命周期中 把全局的`link` style标签复制到shadowDOM中。 且可以做到自动精简未使用的样式。 
同时支持@layer component和@apply

## 不足之处
1. 更改全局的css文件后，HMR不工作，需要手动刷新
2. 复制link标签对性能会有影响，后期考虑换成`constructible stylesheets`


## 代替方案
1. twind 采用`constructible stylesheets`的方案，和tailwind兼容，在运行时构建样式表
2. Lit不使用ShadowDOM。但是这样slot就不能用了