/**
 * @Name: 推送代码
 * @Description: 完成开发，将代码推送到对应仓库中
 * @Author: 刘燕保
 * @Date: 2021-09-15 16:32:54
 **/
const path = require('path')
const fs = require('fs')
const { execSync } = require('child_process')
const enumSub = require('../constant/enumSub')

// 读取当前文件
const subName = fs.readFileSync(path.join(__dirname, '../sub.cac'), 'utf-8')

execSync(`git remote set-url origin ${enumSub[subName].onlineAddr}`)

execSync(`git add .`)
execSync(`git commit -m '提交代码'`)
execSync(`git push`)
