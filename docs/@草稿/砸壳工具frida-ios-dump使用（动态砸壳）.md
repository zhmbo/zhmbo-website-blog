---
title: Mac 砸壳工具frida-ios-dump使用（动态砸壳）
date: 2021-04-20 17:49:00
permalink: /pages/32e0a4/
article: false
sidebar: false
showPageNav: false
---

## 安装Homebrew (Homebrew国内源)

-----------------------------安装 homebrew 开始------------------------------

现在可以直接用 `cunkai` 的 [https://gitee.com/cunkai/HomebrewCN/](https://gitee.com/cunkai/HomebrewCN/) 

Mac 安装脚本：（推荐 优点全面 缺点慢一点）

```
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```

Mac 卸载脚本：


```
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/HomebrewUninstall.sh)"
```

-----------------------------安装 homebrew 结束------------------------------

## 使用 brew 安装 python

-----------------------------安装 python 开始------------------------------

**查询 `python3` 所有有效版本**

```
brew search python3
```

![](https://i.loli.net/2021/04/21/bIAV3moae9cZuvw.png)

我这里已经安装了`python@3.9` 所以后面会有对号

**安装**

```shell
brew install python@3.9
```

**修改 python3 别名**

由于 Xcode 需要使用系统自带的 `python2.7` 所以系统的 `python` 别名

终端使用的是 bash：

```sh
vim .bash_profile
```

终端使用的是zsh：

```
vim .zprofile
```

添加：

```sh
# Python
alias python2='/System/Library/Frameworks/Python.framework/Versions/2.7/bin/python2.7'
alias python3='/usr/local/Cellar/python@3.9/3.9.4/bin/python3.9'
alias python=python3
```

生效：

```sh
source .bash_profile
```

或

```sh
source .zprofile
```

**验证安装结果**

![](https://i.loli.net/2021/04/21/wHPjaJXo3NDqgW6.png)

----------------------------安装 python 结束------------------------------

## 安装 frida

**手机安装：**

cydia添加：https://build.frida.re/ 源，并下载安装 `frida` 

**Mac 安装：**

```sh
sudo pip3 install frida-tools
```

确保手机和Mac上安装的 `frida` 版本保持一致

**安装`usbmuxd`与手机通信**

```sh
brew install usbmuxd
```

**下载 frida-ios-dump 脚本**

下载：[frida-ios-dump](https://github.com/AloneMonkey/frida-ios-dump) 并保存到 opt/dump/ 下：

```sh
git colne https://github.com/AloneMonkey/frida-ios-dump.git /opt/dump/frida-ios-dump-master
```

**安装 dump.py 脚本的依赖：**

```sh
cd /opt/dump/frida-ios-dump
sudo pip3 install -r requirements.txt --upgrade
```

**添加 dump.py 别名：**

终端使用的是 bash：

```sh
vim .bash_profile
```

终端使用的是zsh：

```
vim .zprofile
```

添加：

```
# frida-dump
alias frida-dump="python3 /opt/dump/frida-ios-dump-master/dump.py"
```

生效：

```sh
source .bash_profile
```

或

```sh
source .zprofile
```

**这里注意：** 网络上的陈旧资料都是 `alias dump.py="/opt/dump/frida-ios-dump-master/dump.py"` ，但是实际终端调用 `dump.py` 时会默认调用系统2.7版本的python，会报缺少 frida库的错误。

使用：查看手机进程列表

```sh
 frida-dump -l
```

## 砸壳

**通过`USB`使用`ssh`连接越狱设备，将`22`映射到电脑上的`2222端口`**

```sh
iproxy 2222 22
```

![](https://i.loli.net/2021/04/21/w2vXngNWF4bfmTh.png)

**另开终端加入连接 密码为设备的登录密码`alpine`，需要保持连接**

```sh
ssh -p 2222 root@127.0.0.1
```

或

```sh
ssh root@127.0.0.1 -p 2222
```

![](https://i.loli.net/2021/04/21/XNSjdvtTqJHgPE9.png)

**再开终端开始砸壳你想要分析的App，命令如下：**

查看手机进程

```sh
 frida-dump -l
```

![](https://i.loli.net/2021/04/21/D2TgbrJUcRfS5Gw.png)

**砸壳：**

```sh
frida-dump #pid# 或 #name# 或 #identifier# -o #输出ipa的路径，默认当前路径#
```

以今日头条为例：

手机打开日头条

```sh
frida-dump 今日头条 -o Desktop/News.ipa
```

![](https://i.loli.net/2021/04/21/1IfkbuDdGprScVo.png)



## 工具：

脱壳之后，我们就可以拿到**未加密的可执行文件**了，可以用`MacOView工具`观察，也可以用`class-dump工具`导出头文件，也可以用`Hopper Disassembler工具`分析汇编代码和伪代码...

[**theos**](https://github.com/theos/theos/wiki)

安装：

```sh
vim ~/.zprofile
#添加
export THEOS=/opt/theos
export PATH=$THEOS/bin:$PATH
source .zprofile
sudo git clone --recursive git://github.com/DHowett/theos.git $THEOS
brew install ldid
```

**Mach-O 分析：**

class-dump：

>  下载： [MonkeyDev](https://github.com/AloneMonkey/MonkeyDev) /bin 下的 class-dump（别问为什么用这个，问就是这个可以dump混编项目的头文件），克隆项目到本地将/bin目录下的class-dump cp 到/usr/local/bin/下
使用：class-dump -s -S -H Mach-O文件 -o 输出路径

[Hopper Disassembler](https://links.jianshu.com/go?to=https%3A%2F%2Fwww.hopperapp.com%2F) 

[MachOView](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fgdbinit%2FMachOView)

[IDA](https://links.jianshu.com/go?to=https%3A%2F%2Fwww.hex-rays.com%2Fproducts%2Fida%2F)

LLDB

[MonkeyDev](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2FAloneMonkey%2FMonkeyDev%2Fwiki)

1. 注意：>=Xcode12的版本

   再安装前执行：

   ```sh
   sudo ln -s /Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/Library/Xcode/PrivatePlugIns/IDEOSXSupportCore.ideplugin/Contents/Resources /Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/Library/Xcode/Specifications
   ```

   然后安装：

   ```sh
   sudo /bin/sh -c "$(curl -fsSL https://raw.githubusercontent.com/AloneMonkey/MonkeyDev/master/bin/md-install)"
   ```

2. 在 `Dylib` target 添加：`CODE_SIGNING_ALLOWED=NO`

   ![](https://i.loli.net/2021/04/23/LfE4o6NMcirJZP5.png)


3. 添加 `ibstdc++.dylib` 库：

   添加方法：https://github.com/devdawei/libstdc-

   ```sh
   sudo /bin/sh install-Xcode_12.sh
   ```

**UI层级分析：**

Cycript

Reveal

FLEXLoader

**辅助工具**

iFunBox、OpenSSH、Cydia

## 常用命令：

```sh
frida-trace -U -f com.tdcm.truemoneywallet -m "*[* viewDidLoad]" # 查看oc函数调用
frida-trace -U -f com.tdcm.truemoneywallet -i fopen # 查看c函数调用
frida-dump -l # 查看手机进程 pid｜name｜bundleid 
ideviceinstaller -l # 查看手机进程 FBundleIdentifier, CFBundleVersion, CFBundleDisplayName
idevicesyslog | grep 'xxx' # 查看nslog xxx为查询关键词
```

**end～**



