<!--
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-09-06 11:06:44
-->

用来尝试统一基座包含不同业务

增加子模块
git submodule add --force git@github.com:Yubble/submodule1.git src
git submodule add --force git@github.com:Yubble/submodule2.git src

删除子模块
git submodule deinit -f src
git rm --cached src
rm -rf src
