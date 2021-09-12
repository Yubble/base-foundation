/*
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-09-06 20:41:23
 */

const inquirer = require('inquirer')
const ora = require('ora')
const spawnSync = require('child_process').spawnSync

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
    const res = spawnSync('git', ['remote', 'add', 'sub1', 'git@github.com:Yubble/submodule1.git'])
    // spinner.succeed('子仓库远端链接初始化完成')
    if (res.stderr.length) {
        spinner.fail(res.stderr.toString())
    }
}

runInit()
