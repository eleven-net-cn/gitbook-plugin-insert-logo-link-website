# [gitbook-plugin-insert-logo-link-website](https://www.npmjs.com/package/gitbook-plugin-insert-logo-link-website)

在左侧菜单栏顶部添加 logo，并提供链接跳转至站点。fork 自 https://github.com/matusnovak/gitbook-plugin-insert-logo ，原版没有提供跳转站点功能，扩展开发了一版。

## Installation

直接 install 安装，或者，在 book.json 写入到 plugin 配置后，再运行 `gitbook install` 命令安装。


NPM

```sh
npm i gitbook-plugin-insert-logo-link-website
```

Yarn

```sh
yarn add gitbook-plugin-insert-logo-link-website
```

在 book.json 文件增加 plugin、pluginsConfig 配置：

```json
{
  "plugins": ["insert-logo-link-website"],
  "pluginsConfig": {
    "insert-logo-link-website": {
      "url": "http://www.example.com/my-logo.png",
      "link": "https://www.google.com",
      "target": "_blank",
      "style": "height: 30px"
    }
  }
}
```

## Constants

| 参数名 | 类型   | 必填 | 默认值                             | 说明                                                                         |
| ------ | ------ | ---- | ---------------------------------- | ---------------------------------------------------------------------------- |
| url    | String | 是   | http://www.example.com/my-logo.png | logo 的路径（绝对路径、相对路径、base64）                                    |
| link   | String | 否   | javascript:;                                 | logo 点击的跳转地址                                                          |
| target | String | 否   | \_blank                            | 跳转站点的打开方式，同 a 标签的 target（\_bank、\_self、\_top、\_parent 等） |
| style  | String | 否   | --                                 | logo 的样式，会作用于 logo 本身的 img 标签上                                 |
