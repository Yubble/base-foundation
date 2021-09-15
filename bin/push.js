/**
 * @Name: 推送代码
 * @Description: 完成开发，将代码推送到对应仓库中
 * @Author: 刘燕保
 * @Date: 2021-09-15 16:32:54
 **/
const path = require('path')
const fs = require('fs')

// 读取当前文件
fs.readFile(path.join(__dirname, '../cacheSub.txt'), 'utf-8', (err, data) => {
    if (err) console.log('----- err is -----', err)

    console.log('------- data is --------', data)
})
