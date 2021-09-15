/**
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-09-06 20:41:23
 **/

const inquirer = require('inquirer')
const ora = require('ora')
const { spawnSync, execSync } = require('child_process')

// 确定要开发的业务内容
const runInit = async () => {
    const { subject } = await inquirer.prompt([
        {
            name: 'subject',
            message: 'Have U ever used Rock substrate',
            type: 'list',
            choices: ['Y', 'N']
        }
    ])

    if (subject === 'Y') {
        ora(`请继续使用`).info()
        return
    }
    
    const spinner = ora(`本地子仓库初始化中`).start()
    const res1 = spawnSync('git', ['remote', 'add', 'sub1', 'git@github.com:Yubble/submodule1.git'])
    const res2 = spawnSync('git', ['remote', 'add', 'sub2', 'git@github.com:Yubble/submodule2.git'])

    if (res1.stderr.length) {
        spinner.fail(res1.stderr.toString())
        execSync('git remote -v')
        return
    }
    if (res2.stderr.length) {
        spinner.fail(res2.stderr.toString())
        execSync('git remote -v')
        return
    }
    spinner.succeed('子仓库远端链接初始化完成')
    // 展示当前已绑定的远端仓库列表
    execSync('git remote -v')
}

runInit()
