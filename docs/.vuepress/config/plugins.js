// 插件
module.exports = [

  // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
  ["thirdparty-search", {
      thirdparty: [
        // 可选，默认 []
        {
          title: "在MDN中搜索",
          frontUrl: "https://developer.mozilla.org/zh-CN/search?q=", // 搜索链接的前面部分
          behindUrl: "", // 搜索链接的后面部分，可选，默认 ''
        },
        {
          title: "在Runoob中搜索",
          frontUrl: "https://www.runoob.com/?s=",
        },
        {
          title: "在Vue API中搜索",
          frontUrl: "https://cn.vuejs.org/v2/api/#",
        },
        {
          title: "在Bing中搜索",
          frontUrl: "https://cn.bing.com/search?q=",
        },
        {
          title: "通过百度搜索本站的",
          frontUrl: "https://www.baidu.com/s?wd=site%3Aitzhangbao.com%20",
        },
      ]
  }],

  // 百度自动推送
  "vuepress-plugin-baidu-autopush", 

  // 代码块复制按钮
  ["one-click-copy", {
      copySelector: [
        'div[class*="language-"] pre',
        'div[class*="aside-code"] aside',
      ], // String or Array
      copyMessage: "复制成功", // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
  }],

  // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
  ["demo-block", {
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false, // 是否展示为横向样式
      },
  }],

  // 放大图片
  ["vuepress-plugin-zooming", {
      selector: ".theme-vdoing-content img:not(.no-zoom)", // 排除class是no-zoom的图片
      options: {
        bgColor: "rgba(0,0,0,0.6)",
      },
  }],

  // 百度统计
  ["vuepress-plugin-baidu-tongji", {
      hm: "270cbaad87cfce6296b2490fb8fc7b5d",
  }],

  // "上次更新"时间格式
  ["@vuepress/last-updated", {
      transformer: (timestamp, lang) => {
        const moment = require("moment"); // https://momentjs.com/
        return moment(timestamp).format("YYYY/MM/DD, H:MM:SS");
      },
  }],

  ['@vuepress-reco/comments', {
    solution: 'valine',
    options: {
      appId: "HHUL6NPCmJLMBlKuwoctwByv-MdYXbMMI",
      appKey: "I5hVTn1wDLP7LJC1v18MSjeA",
      placeholder: '🌠填写邮箱可以收到回复哦!\n🚀评论支持 Markdown 语法\n🌶评论支持 AKISMET 垃圾过滤\n🌛期待您的建议与反馈',
      visitor: true, // 阅读量统计
      notify: true,
      avatar: 'wavatar',
      recordIP: true,
      meta:['nick', 'mail'],
      requiredFields:['nick', 'mail'],
    },
  }],

  // 评论 valine
  // ["vuepress-plugin-comment", {
  //   choosen: "valine",
  //   options: {
  //     el: "#valine-vuepress-comment",
  //     appId: "njGO225L16L7PmcnN4OnheBs-9Nh9j0Va",
  //     appKey: "vz210FuGo5NxnB8dNIvn4NHV",
  //     visitor: true, // 阅读量统计
  //     notify: true,
  //     avatar: 'retro',
  //     recordIP: true,
  //     path: "<%- window.location.pathname %>",
  //     // path: "<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>",
  //   },
  // }],

// 评论 gitalk
// ["vuepress-plugin-comment", {
//     choosen: "gitalk",
//     options: {
//       clientID: "2a75d4fa6028b27e5790",
//       clientSecret: "3b934635a6844571db8166bfed046eae98461f90",
//       repo: "blog-comment", // GitHub 仓库
//       owner: "itzhangbao", // GitHub仓库所有者
//       admin: ["itzhangbao"], // 对仓库有写权限的人
//       // distractionFreeMode: true,
//       pagerDirection: "last", // 'first'正序 | 'last'倒序
//       id:
//         "<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>", //  页面的唯一标识,长度不能超过50
//       title: "「评论」<%- frontmatter.title %>", // GitHub issue 的标题
//       labels: ["Gitalk", "Comment"], // GitHub issue 的标签
//       body:
//         "页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>", // GitHub issue 的内容
//     },
// }],
]