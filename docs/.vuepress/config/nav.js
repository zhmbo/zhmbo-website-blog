module.exports = [
  {
    text: '首页', link: '/blog/', icon: 'jumbo-home',
  },
  {
    text: 'iOS', link: '/ios/',
    items: [
      {
        text: 'iOS开发精髓',
        items: [
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
    text: '留言', link: '/leaveword/'
  },
  {
    text: '索引', link: '/archives/',
    items: [
      {text: '分类', link: '/categories/'},
      {text: '标签', link: '/tags/'},
      {text: '归档', link: '/archives/'},
    ]
  }
];
