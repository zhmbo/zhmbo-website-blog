const themeConfig = require("./config/themeConfig.js");
const plugins = require("./config/plugins.js");

module.exports = {
  // theme: "vdoing", // 使用依赖包主题
  theme: require.resolve("../../theme-vdoing"), // 使用本地主题
  // 主题配置
  themeConfig,
  // 插件
  plugins,
  // 标题
  title: "JumboのBlog",
  // 网站描述
  description: "web前端技术博客,简洁至上,专注web前端学习与总结。JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github等技术文章。", // 描述,以 <meta> 标签渲染到页面html中
  // '/<github仓库名>/'， 默认'/'
  base: "/", 
  //指定 vuepress build 的输出目录
  dest: "dist", 
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head: [
    ["link", {rel: "icon", href: "/img/favicon.ico"}], //favicons，资源放在public文件夹
    ["meta", {name: "keywords", content: "前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown"}],
    ["meta", {name: "baidu-site-verification", content: "7F55weZDDc"}], // 百度统计的站点拥有者验证
    ["meta", {name: "theme-color", content: "#11a8cd"}], // 移动浏览器主题颜色
    // ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'}], // 移动端阻止页面缩放
    ["link", {rel: "stylesheet", href: "/includes/stylesheets/jumbo.lite.css"}],
    ["script", {language: "javascript", type: "text/javascript", src: "/includes/javascripts/jumbo.lite.js"}],
    ["link", {rel: "html", href: "/index.html"}],
  ],

  // 代码行号
  markdown: { lineNumbers: true },

  /**
   * 指定额外的需要被监听的文件。
   * 你可以监听任何想监听的文件，文件变动将会触发 vuepress 重新构建，并实时更新。
   */
  extraWatchFiles: [// 使用相对路径
    // config
    '.vuepress/config/nav.js',
    '.vuepress/config/plugins.js',
    '.vuepress/config/themeConfig.js',
    // styles
    // '.vuepress/styles/palette.styl',
    // '.vuepress/styles/index.styl',
    // '.vuepress/styles/markdown-container.styl',
  ],

  //webpack别名 如![Image from alias](~@alias/image.png)
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@alias': 'path/to/some/dir'
  //     }
  //   }
  // }
};