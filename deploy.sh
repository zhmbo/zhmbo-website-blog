#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 一、生成静态文件
npm run docs:build

# 二、clone official 移动blog到offcial
if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
  codingUrl=git@e.coding.net:itzhangbao/website/official.git
else
  git config --global user.name "itzhangbao"
  git config --global user.email "itzhangbao@163.com"
  codingUrl=https://ZYzEthRPkx:${CODING_TOKEN}@e.coding.net/itzhangbao/website/official.git
fi
git clone $codingUrl official
mv -rf docs/.vuepress/dist/* official

#三、部署到coding
cd official
if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
  msg='deploy'
  codingUrl=git@e.coding.net:itzhangbao/website/official.git
else
  msg='来自github actions的自动部署'
  git config --global user.name "itzhangbao"
  git config --global user.email "itzhangbao@163.com"
  codingUrl=https://ZYzEthRPkx:${CODING_TOKEN}@e.coding.net/itzhangbao/website/official.git
fi
git init
git add -A
git commit -m "${msg}"
git push -f $codingUrl master # 推送到coding

#四、删除生成文件
cd - # 退回开始所在目录
rm -rf official