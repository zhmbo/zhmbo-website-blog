---
title: debugserver+lldb动态调试
date: 2021-04-20 17:49:00
permalink: /pages/32e0a4/
article: false
sidebar: false
showPageNav: false
---



ssh，sshpass免密登录

rightlzc 2018-10-02 10:52:46  10245  收藏 14
分类专栏： Linux基础 文章标签： linux运维
版权
很多时候我们在确定安全的情况下，对ssh的交互登录"深恶痛绝"，所以就需要进行免密登录。

1.ssh
1.1 登录 

~]# ssh -p22 root@192.168.179.111   #端口22，登录root用户              

注：若不指定用户，默认为本机使用的用户，不指定端口，默认为22端口。

1.2 登陆后执行命令  --> 命令最好全路径                  

~]# ssh root@192.168.179.111 /bin/ls -l /backup/data                                

1.3 查看已知主机                 

~]# cat ~/.ssh/known_hosts

1.4 设置免密登录

192.168.179.110--登录-->192.168.179.111

在192.168.179.110上：

~]# ssh-keygen -t rsa  #一路回车

~]# ssh-copy-id -i ~/.ssh/id_rsa.pub root@192.168.179.111    #需要输入111主机密码

~]# ssh -p22 root@192.168.179.111   #即可无需密码登录

注：110上的 id_rsa.pub (公钥)文件会存放在111上的 authorized_keys 文件中。ssh默认目录为~/.ssh/，配置文件在 /etc/ssh/ssh_config 。

2.sshpass
ssh登陆不能在命令行中指定密码。sshpass的出现，解决了这一问题。sshpass用于非交互SSH的密码验证，一般用在sh脚本中，无须再次输入密码（本机known_hosts文件中有的主机才能生效）。它允许你用 -p 参数指定明文密码，然后直接登录远程服务器，它支持密码从命令行、文件、环境变量中读取。

由于sshpass不能使用yum安装，这儿使用源码包安装。

sshpass下载地址：http://sourceforge.net/projects/sshpass/ 下载为一个 tar.gz的压缩包。 

2.1 安装sshpass

~]# tar xf sshpass-1.06.tar.gz 
~]# cd sshpass-1.06
~]# ./configure --prefix=/usr/local/
~]# make && make install
~]# cp /usr/local/bin/sshpass /usr/bin/
2.2 使用

2.2.1 登录远程主机

~]# sshpass -p 123456 ssh -p22  root@192.168.179.111

~]# sshpass -f pw.txt ssh -p22  root@192.168.179.111    #pw.txt存放密码，密码是文件的第一行

~]# sshpass -e ssh -p22  root@192.168.179.111       #使用SSHPASS环境变量为密码

2.2.2 登录远程主机并执行命令

~]# sshpass -p 960711 ssh -p22 root@192.168.179.113 /bin/ls

2.2.3 拷贝文件到远程主机

~]# sshpass -p 123456 scp hostdir root@192.168.179.111:srcdir 

注：scp每次都是全量拷贝，增量拷贝使用rsync。

2.2.4 忽略交互连接远程主机执行命令

~]# sshpass -p 960711 ssh -o StrictHostKeyChecking=no root@192.168.179.111 '/bin/ls /tmp'

注：在远程主机上执行命令后就退出远程主机。当需要在很多主机上执行一条相同命令时需要这个参数。

更多ssh原理可参考：https://www.cnblogs.com/ftl1012/p/ssh.html
————————————————
版权声明：本文为CSDN博主「rightlzc」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/rightlzc/article/details/82912174