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


### Step 3 生成 iconfont.json 文件

```bash
npx iconfont-local-build
```
运行后会在根目录生成 iconfont.json 文件


# 用法
1. Vue 可参考 [And Design Vue 提供的 createFromIconfontCN 方法](https://antdv.com/components/icon-cn/#components-icon-demo-iconfont)
2. React 可参考 [Ant Design 提供的 createFromIconfontCN 方法](https://ant.design/components/icon-cn#components-icon-demo-scripturl)