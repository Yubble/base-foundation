/*
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-09-06 20:41:23
 */

const inquirer = require('inquirer')
const execSync = require('child_process').execSync

// 首先清空当前子仓库
execSync('git submodule deinit -f src')

// 确定要开发的业务内容
// const { subject } = await inquirer.prompt([
//     {
//         name: 'subject',
//         message: '请选择要开发的模块',
//         type: 'list',
//         choices: ['业务线1', '业务线2']
//     }
// ])
