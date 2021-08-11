# hlym-ui(WIP)

## Project Introduct
this is a vue UI project.
```
- examples
   - example // 组件使用demo
      - button.vue
   - App.vue
   - main.js
- packages // 组件包源码
   - button
      - __tests__ 组件的单元测试
         - button.spec.js
      - src
         - index.vue
      - index.js // 单组件入口
   - index.js // 入口
- styles // 组件样式
- typings // 组件的类型

```

## How to use this vue ui component
```
npm install hlym-vueui
```

or

```
yarn add hlym-vueui
```

``` vue
<template>
  <hl-button type="primary">按钮</hl-button>
  <hl-icon name="edit"></hl-icon>
</template>
```

in entry file import globel CSS file

```
import { createApp } from 'vue'
import HlymUI from 'hlym-vueui'
import 'hlym-vueui/lib/hlym-vueui.css'
import App from './App.vue'
const app = createApp(App)
app.use(HlymUI).mount('#app')
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
