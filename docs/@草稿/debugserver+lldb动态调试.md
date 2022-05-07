---
title: debugserver+lldb动态调试
date: 2021-04-20 17:49:00
permalink: /pages/32e0a4/
article: false
sidebar: false
showPageNav: false
---

### 概述

`debugserver`、`lldb`是协同工作的，`debugserver`依附在APP上，时刻监听APP的运行状态，并有控制APP执行的能力；lldb是在APP外部的，可以和debugserver建立连接，通过debugserver获取APP运行状态，并且能通知debugserver对APP做一些事情。在真机调试的时候，Xcode将debugserver加入到APP中，通过lldb来调试APP，那么同样也可以在iterm上对越狱手机上的任意APP进行调试。

### 从手机中拷贝 debugserver到mac

```sh
 scp root@10.10.1.16:/Developer/usr/bin/debugserver debugserver
```

`10.10.1.16 `为手机ip

### 重签名

1. 通过ldid命令，导出debugserver现有的权限

   ```sh
   ldid -e debugserver > debugserver.entitlements
   ```

2. 编辑 `debugserver.entitlements` 文件

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
   <plist version="1.0">
   <dict>
       <key>com.apple.springboard.debugapplications</key>
       <true/>
       <key>com.apple.backboardd.launchapplications</key>
       <true/>
       <key>com.apple.backboardd.debugapplications</key>
       <true/>
       <key>com.apple.frontboard.launchapplications</key>
       <true/>
       <key>com.apple.frontboard.debugapplications</key>
       <true/>
       <key>com.apple.private.logging.diagnostic</key>
       <true/>
       <key>com.apple.security.network.server</key>
       <true/>
       <key>com.apple.security.network.client</key>
       <true/>
       <key>com.apple.private.memorystatus</key>
       <true/>
       <key>com.apple.private.cs.debugger</key>
       <true/>
       <key>get-task-allow</key>
       <true/>
       <key>platform-application</key>
       <true/>
       <key>run-unsigned-code</key>
       <true/>
       <key>task_for_pid-allow</key>
       <true/>
   </dict>
   </plist>
   <?xml version="1.0" encoding="UTF-8"?>
   <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
   <plist version="1.0">
   <dict>
       <key>com.apple.springboard.debugapplications</key>
       <true/>
       <key>com.apple.backboardd.launchapplications</key>
       <true/>
       <key>com.apple.backboardd.debugapplications</key>
       <true/>
       <key>com.apple.frontboard.launchapplications</key>
       <true/>
       <key>com.apple.frontboard.debugapplications</key>
       <true/>
       <key>com.apple.private.logging.diagnostic</key>
       <true/>
       <key>com.apple.security.network.server</key>
       <true/>
       <key>com.apple.security.network.client</key>
       <true/>
       <key>com.apple.private.memorystatus</key>
       <true/>
       <key>com.apple.private.cs.debugger</key>
       <true/>
       <key>get-task-allow</key>
       <true/>
       <key>platform-application</key>
       <true/>
       <key>run-unsigned-code</key>
       <true/>
       <key>task_for_pid-allow</key>
       <true/>
   </dict>
   </plist>
   ```

3. 通过ldid命令，对debugserver进行重新签名

   ```sh
   ldid -Sdebugserver.entitlements debugserver
   ```

   注意：S 大写，后无空格

### 拷贝到手机`/usr/bin` 路径下

```sh
scp debugserver root@10.10.1.16:/usr/bin/debugserver
```

`10.10.1.16 `为手机ip

### 端口映射

**开两个终端**

```sh
iproxy 2222 22 #这个用来连接设备
```

```sh
iproxy 10011 10011 #这个用来lldb使用
```

**USB连接**

开新的终端窗口

```sh
ssh -p 2222 root@127.0.0.1
```

产看手机进程

```sh
ps -ef
```

**debugserver监听**

```sh
debugserver localhost:10011 /var/containers/Bundle/Application/069AA818-0B61-4DA2-9FFA-FE78968DABAA/WeChat.app/Wechat
```

或

```sh
debugserver localhost:10011 -a 9234 # 9234为pid
```

### 启动lldb

开新的终端窗口

```sh
lldb
```

```sh
process connect connect://localhost:10011
```

