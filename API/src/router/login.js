const express = require('express');
const router = express.Router();
const crypto = require('crypto');

const token = require('../utils/token');

const { formatData, md5 } = require('../utils/tools');
const mongo = require('../utils/mongo');
const { password_privateKey } = require("../config.json");

// 登录
router.post('/', async (req, res) => {
    let { username: LoginID, password: Password, vcode, mdl } = req.body;

    // 从会话中获取验证码
    // 校验验证码
    console.log('req.body', req.body)
    if (vcode !== req.session.vcode) {
        res.send(formatData({ code: 10 }))
        return;
    }

    // 加密后进行查询
    const hash = crypto.createHash('md5');
    hash.update(Password + password_privateKey); // 加盐 盐值
    Password = hash.digest('hex');

    Password = md5(Password)

    let result = await mongo.find('user', { LoginID, Password }, { field: { Password: false } });//[{}]


    if (result.length > 0) {
        // 用户名、密码、验证码都校验通过后，判断是否有免登陆选项
        // 1. 生成token
        let authorization;
        if (mdl === 'true') {
            // token的操作

            authorization = token.create({ LoginID }, '7d')
        } else {
            authorization = token.create({ LoginID })
        }

        result = result[0];
        console.log('resultyuan', result);
        let userinfo = await mongo.find('userinfo', { LoginID });
        // Object.assign(result,userinfo);
        /*  result = {
             ...userinfo[0]
         } */
        console.log('resultooooo=', result);
        result.roleName = getName(result.role)
        result.authorization = authorization
        console.log('result====', result);
        res.send(formatData({ data: result }));
    } else {
        res.send(formatData({ code: 0 }))
    }
})

function getName(role) {
    let Name = "普通用户";
    switch (role) {
        case "admin":
            Name = "管理员";
            break;
        case "user":
            Name = "普通用户";
            break;
        default:
            break;
    }
    return Name
}



module.exports = router;