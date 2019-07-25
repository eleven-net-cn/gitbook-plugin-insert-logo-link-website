# [gitbook-plugin-insert-logo-link-website](https://www.npmjs.com/package/gitbook-plugin-insert-logo-link-website)

> 在左侧菜单栏顶部添加 logo，并提供链接跳转至站点。fork 自 https://github.com/matusnovak/gitbook-plugin-insert-logo ，原版没有提供跳转站点功能，扩展开发了一版。

## Installation

> 直接 install 安装，或者，在 book.json 写入到 plugin 配置后，再运行 `gitbook install` 命令安装。

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
      "url": "http://www.example.com/my-logo.png", // logo 地址（相对地址、绝对地址、base64）
      "link": "https://www.google.com", // 跳转站点位置
      "target": "_blank", // 跳转站点的打开方式，同 a 标签 target
      "style": "height: 30px" // logo 样式
    }
  }
}
```