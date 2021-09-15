/**
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-09-15 11:02:50
 **/

 const inquirer = require('inquirer')
 const { execSync } = require('child_process')

const runFetchSub = async () => {
    const { subject } = await inquirer.prompt([
        {
            name: 'subject',
            message: 'choice subgit U want to develop',
            type: 'list',
            choices: ['sub1', 'sub2']
        }
    ])

    console.log('--- subject is ---', subject)

    // 首先删除开发src
    execSync(`rm -rf src`)
    // 拉取线上代码到当前缓存区
    execSync(`git fetch ${subject}`)
    // 创建src并将子仓库内容拉取进去
    execSync(`git subtree add -P src ${subject}/main`)
    // subtree会创建一次commit，需要整体提交一次，否则切换子仓库会失败
    // execSync('git add .')
    // execSync('git commit -m "切换子仓库"')
    // execSync('git push')
}

runFetchSub()