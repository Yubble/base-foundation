/**
 * @Name: 
 * @Description: 升级基座
 * @Author: 刘燕保
 * @Date: 2021-09-16 11:35:56
 **/

const ora = require('ora')
const inquirer = require('inquirer')
const { execSync } = require('child_process')

const doUpdate = async () => {
    const { flag } = await inquirer.prompt([
        {
            name: 'flag',
            message: '本操作只提交基座集成能力到基座仓库，不会携带src中业务代码，请问是否已经将业务代码提交过？',
            type: 'confirm'
        }
    ])

    if (!flag) {
        ora('请先将业务代码发送至远端仓库中，命令为yarn push-sub').fail()
    }

    execSync(`rm -rf src`)
    execSync(`rm -rf sub.cac`)
    execSync(`git remote set-url origin git@github.com:Yubble/base-foundation.git`)
    execSync(`git add .`)
    execSync(`git commit -m '更新基座'`)
    execSync(`git push -u origin master:master`)
}

doUpdate()
