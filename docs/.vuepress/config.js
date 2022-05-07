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
  title: "Jumbo",
  // 网站描述
  description: "Jumbo的技术博客,专注iOS技术分享,iOS,OC,Objective-C,Swift,SwiftUI,Apple,上架,Flutter,OpenGL,Xcode,Github,RxSwift,算法,架构,面试,itzhangbao,zb,ZB,Jumbo,jumbo", // 描述,以 <meta> 标签渲染到页面html中
  // '/<github仓库名>/'， 默认'/'
  base: "/", 
  //指定 vuepress build 的输出目录
  dest: "dist", 
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head: [
    ["link", {rel: "icon", href: "/img/favicon.ico"}], //favicons，资源放在public文件夹
    ["meta", {name: "keywords", content: "Jumbo,itzhangbao,zhangbao,Jumbo的技术博客,个人博客,博客搭建,专注iOS技术分享,iOS,iOS进阶,iOS高级,OC,Objective-C,Swift,SwiftUI,Apple,上架,Flutter,OpenGL,Xcode,RxSwift,UIButton,UITableView,网络请求,Github,GithubActions,算法,架构,面试,zb,ZB,Jumbo,jumbo"}],
    ["meta", {name: "baidu-site-verification", content: "code-l7ZsTFnxp5"}], // 百度统计的站点拥有者验证
    ["meta", {name: "theme-color", content: "#11a8cd"}], // 移动浏览器主题颜色
    // ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'}], // 移动端阻止页面缩放
    // 引入jquery
    ["script", {src: "/js/jquery.min.js"}],
    // 引入鼠标点击脚本
    ["script", {src: "/js/MouseClickEffect.js"}],
    ["script", {src: "/js/FooterFish.js"}],
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