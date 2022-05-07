---
title: debugserver+lldb动态调试
date: 2021-04-20 17:49:00
permalink: /pages/32e0a4/
article: false
sidebar: false
showPageNav: false
---



# fatal: unable to access ‘https://github xxxxxxxxx的解决方法

问题重现：
$ git clone -b v2.24.0 https://github.com/IntelRealSense/librealsense.git
Cloning into 'librealsense'...
fatal: unable to access 'https://github.com/IntelRealSense/librealsense.git/': gnutls_handshake() failed: The TLS connection was non-properly terminated.

 

解决方法：
将命令中的 https改为 git 

git clone -b v2.24.0 git://github.com/IntelRealSense/librealsense.git
————————————————
版权声明：本文为CSDN博主「leo-wkd」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_42037180/article/details/112465841

