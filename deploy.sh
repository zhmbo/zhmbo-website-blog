#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 一、生成静态文件
echo "一、生成静态文件"
npm run docs:build
cd dist

# 二、配置github地址
echo "二、配置github地址"
if [ -z "$GITHUB_TOKEN" ]; then  # -z 字符串 长度为0则为true；$GITHUB_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
  msg='deploy'
  githubUrl=git@github.com:itzhangbao/itzhangbao.com.git
else
  msg='来自github actions的自动部署'
  git config --global user.name "itzhangbao"
  git config --global user.email "itzhangbao@163.com"
  githubUrl=https://itzhangbao:${GITHUB_TOKEN}@github.com/itzhangbao/itzhangbao.com.git
fi

#三、备份到【site-blog】
echo "三、备份到【site-blog】"
git init
git add -A
git commit -m"${msg}"
git push -f ${githubUrl} master:site-blog
find . -name ".git" | xargs rm -Rf

#四、克隆【site-official】
# echo "四、克隆【site-official】"
cd -
# git clone -b site-official $githubUrl official
# find official -name ".git" | xargs rm -Rf
# mv -f official/* dist

#五、部署到【master】
echo "五、部署到【master】"
cd dist
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master # 推送到github

#六、删除生成文件
echo "六、删除生成文件"
cd - # 退回开始所在目录
# rm -rf official
rm -rf dist