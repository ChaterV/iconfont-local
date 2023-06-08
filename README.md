# iconfont-local
自动化获取最新的在线 iconfont，支持本地化渲染。

# 原理

通过 shell 脚本进行模拟请求生成 iconfont.json 文件，对比时间进行覆盖更新。



# 使用方法

### Step 1 安装

```bash
# Yarn
yarn add iconfont-local --dev

# Npm
npm install iconfont-local --save-dev
```


### Step 2 生成配置文件

```bash
npx iconfont-local-init
```

此时项目根目录会生成 `iconfontConfig.json` 文件：
```json
{
  "url": "iconfont 请求网址",
  "cookie": "iconfont 请求头 cookie",
  "referer": "iconfont 请求头 referer"
}
```
打开你的 iconfont 主页并开启控制台 -> 网络

##### url
找到请求网址为 'https://www.iconfont.cn/api/project/detail.json?pid=xxxx' 的请求 -> 复制请求网址地址

##### cookie
找到请求标头里的 cookie 并复制

##### referer
找到请求标头里的 referer 并复制

![](https://raw.githubusercontent.com/ChaterV/iconfont-local/main/iconfont%E7%A4%BA%E4%BE%8B.jpg)


### Step 3 生成 iconfont.json 文件

```bash
npx iconfont-local-build
```
运行后会在根目录生成 iconfont.json 文件


# 用法
1. Vue 可参考 [And Design Vue 提供的 createFromIconfontCN 方法](https://antdv.com/components/icon-cn/#components-icon-demo-iconfont)
2. React 可参考 [Ant Design 提供的 createFromIconfontCN 方法](https://ant.design/components/icon-cn#components-icon-demo-scripturl)

例：

在线方法：
```ts
import { createFromIconfontCN } from "@ant-design/icons-vue";
import iconfontConfig from "iconfont.json";

// 此方法需要保证你的 iconfont 更新后，手动更新了在线链接
const IconFont = createFromIconfontCN({
  scriptUrl: iconfontConfig.data.font.js_file // 替换为你的 iconfont.json 路径
})
```

离线方法：

```ts
// 此方法无需手动更新在线链接，即是 iconfont 在线链接维护也可正常使用（前提是 json 文件可正常获取）
import {createFromIconfontCN} from "@ant-design/icons-vue";
import compileIcon from "iconfont-local/build/script/compileIcon";
import iconfontConfig from "iconfont.json"; // 替换为你的 iconfont.json 路径

const IconFont = createFromIconfontCN({
    scriptUrl: compileIcon(iconfontConfig.data.icons)
})
```