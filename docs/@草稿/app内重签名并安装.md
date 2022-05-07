---
title: app内重签名并安装
date: 2021-04-20 17:49:00
permalink: /pages/32e0a4/
article: false
sidebar: false
showPageNav: false
---

### 工程基础

- UI工具类
- ZBCrash
- ZBLog
- 网络请求类
- 其他工具类
  - runtime
  - gcd
  - sqlite3
  - 

### IPA管理类

- 下载
  - 下载动画
- 上传
- 本地下载
- 链接下载
- 检测链接

### 证书管理类

- 本地上传
- 线上download

#### iap签名

- 在线签名

- 本地签名
- 获取udid

### app内安装ipa

```objective-c
NSString * url = [NSString stringWithFormat:@"itms-services://?action=download-manifest&url=%@", plistUrl];
[[UIApplication sharedApplication] openURL:[NSURL URLWithString:url]];
```

