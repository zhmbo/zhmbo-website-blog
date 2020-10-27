module.exports = [
  {
    text: '首页', link: '/blog/', icon: 'jumbo-nav-home',
  },
  {
    text: 'iOS', link: '/ios/', icon: 'jumbo-apple',
    items: [
      {
        text: 'iOS开发精髓',
        items: [
          {text: '介绍', link: '/pages/3f0170/'},
          {text: '从入门', link: '/pages/7354af/'},
          {text: '到放弃', link: '/pages/1b29d1/'}
        ]
      },
      {
        text: 'iOS充电宝',
        items: [
          {text: 'Swift5+', link: '/pages/0961cf/'},
          {text: 'SwiftUI', link: '/pages/5cb5f0/'},
          {text: 'iOS14', link: '/pages/9e761f/'},
          {text: 'Xcode12', link: '/pages/5e2170/'},
        ]
      },
    ]
  },
  {
    text: '技术', link: '/technology/', icon: 'jumbo-jishu',
    items: [
      {text: '博客', link: '/pages/4f2c93/'},
      {text: 'Git', link: '/pages/fc9c93/'},
    ]
  },
  {
    text: '留言', link: '/leaveword/', icon: 'jumbo-liuyan'
  },
  {
    text: '索引', link: '/archives/', icon: 'jumbo-suoyin',
    items: [
      {text: '分类', link: '/categories/'},
      {text: '标签', link: '/tags/'},
      {text: '归档', link: '/archives/'},
      {text: '友链', link: '/friends/'},
      {text: '导航', link: '/navigation/'},
    ]
  }
];
