---
title: debugserver+lldb动态调试
date: 2021-04-20 17:49:00
permalink: /pages/32e0a4/
article: false
sidebar: false
showPageNav: false
---



# xcode10 11 12 libstdc++.6.0.9.dylib libstdc++.6.dylib libstdc++.dylib三个库报错解决方案

git clone https://github.com/devdawei/libstdc-.git

`Xcode 10`和`Xcode 11` 12 中删除的`libstdc++`库

1. 先下载下来这个项目，然后打开终端`cd`到`libstdc--master`文件夹；
2. 如果你使用的是 Xcode 10，则将`install-Xcode_10.sh`拖到终端中执行即可。Xcode 11 版则将`install-Xcode_11.sh`拖到终端中执行。

