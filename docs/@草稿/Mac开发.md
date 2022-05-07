---
title: debugserver+lldb动态调试
date: 2021-04-20 17:49:00
permalink: /pages/32e0a4/
article: false
sidebar: false
showPageNav: false
---



这两天自己打算动手撸一个Todo,功能极其简单，按照iOS的经验，大概半天就可以了。

MacOS呢，窗口控制比较烦，看了大半天才发现，它与iOS的ViewController的概念不太一样，都用addChildViewController，addSubview来控制页面的的加载和消失。自己模仿iOS的NavigationController自定义了个NSWindowController，来管理登录、注册这些页面。然而在主要业务页面，现在一个NStableView还困扰着我，等我写完再来补坑


资料极少，这是最近找到的

[零基础 macOS 应用开发（一）](https://link.zhihu.com/?target=https%3A//segmentfault.com/a/1190000011137754)

[一步一步，开始上手Mac 开发（一）](https://link.zhihu.com/?target=http%3A//www.jianshu.com/p/feadeb1ae7ae)

**[12306ForMac](https://link.zhihu.com/?target=https%3A//github.com/fancymax/12306ForMac)**

**[MACOS 答题器，界面跳转](https://link.zhihu.com/?target=http%3A//www.cnblogs.com/rayshen/p/5145861.html)**

[OS X 中的窗口和窗口控制器详解](https://link.zhihu.com/?target=http%3A//www.jianshu.com/p/5ec4b80b77b4)

