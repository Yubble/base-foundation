/**
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-09-15 11:02:50
 **/

 const inquirer = require('inquirer')
 const { execSync } = require('child_process')
 const fs = require('fs')
 const path = require('path')
 global.curSub = ''

 const runFetchSub = async () => {
    const { subject } = await inquirer.prompt([
        {
            name: 'subject',
            message: 'choice subgit U want to develop',
            type: 'list',
            choices: ['sub1', 'sub2']
        }
    ])

    // 首先检测是否有src文件目录
    const srcExist = fs.existsSync(path.join(__dirname, '../src'))
    // 如果不存在，则说明用户是第一次使用基座
    // 如果存在，先删除src文件夹
    if (srcExist) {
        execSync(`rm -rf src`)
        execSync('git add .')
        execSync('git commit -m "切换子仓库"')
    }
    // 拉取线上代码到当前缓存区
    execSync(`git fetch ${subject}`)
    // 创建src并将子仓库内容拉取进去
    execSync(`git subtree add -P src ${subject}/main`)
    // subtree会创建一次commit，需要整体提交一次，否则切换子仓库会失败
    execSync('git push')
}

runFetchSub()