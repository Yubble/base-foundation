<!--
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-09-06 11:06:44
-->

用来尝试统一基座包含不同业务

增加子模块
git remote add sub1 git@github.com:Yubble/submodule1.git
git remote add sub2 git@github.com:Yubble/submodule2.git

git fetch sub1
git fetch sub2

git subtree add -P src sub1/main
git subtree add -P src sub2/main

提交子模块
git subtree push -P src sub1/main
git subtree push -P src sub2/main

删除子模块
rm -rf src
