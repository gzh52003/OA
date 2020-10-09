const express = require('express');
const router = express.Router();
const query = require('../utils/mysql');
const mongo = require('../utils/mongo');
const { formatData, md5, UUID } = require('../utils/tools')

router.post('/', async (req, res) => {
    let { Name, Phone, Age, DepartmentID, Gender, RolesID, LoginID, Password } = req.body;
    /*   console.log('user', user);
      const hash = crypto.createHash('md5');
      hash.update(user.password + password_privateKey); // 加盐 盐值
      user.password = hash.digest('hex');
  
      user.password = md5(user.password) */
    let result
    try {
        result = await mongo.insert('user', { Name, Phone, Age, DepartmentID, Gender, RolesID, LoginID, Password });
        res.send(formatData());
    } catch (err) {
        res.send(forMatData({ code: 0 }))

    }
})


//数据查询
router.get('/', async (req, res) => {
    console.log("user:");

    // mongo
    const { page = 1, size } = req.query;
    // console.log('DepartmentID', DepartmentID);
    const limit = size * 1;
    const skip = (page - 1) * size;
    try {
        const result = await mongo.find('user', {}, { limit, skip, field: { password: false } })
        console.log('result', result);
        res.send(formatData({ data: result }));
    } catch (err) {
        res.send(formatData({ code: 0 }))
    }

})

//根据部门查询
router.get('/Department', async (req, res) => {
    console.log("user:");

    // mongo
    const { page = 1, size = 10, DepartmentID = 0 } = req.query;
    console.log('DepartmentID', DepartmentID);
    const limit = size * 1;
    const skip = (page - 1) * size;
    try {
        const result = await mongo.find('user', { DepartmentID }, { limit, skip, field: { password: false } })
        console.log('result', result);
        res.send(formatData({ data: result }));
    } catch (err) {
        res.send(formatData({ code: 0 }))
    }

})


router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await mongo.remove('user', { _id: id });
        res.send(formatData())
    } catch (err) {
        res.send(formatData({ code: 0 }))
    }

})
//检测账号,检查
router.get('/check', async (req, res) => {
    const { user, Password } = req.query;
    console.log('user', user, 'Password', Password);

    let result = await mongo.find('user', { LoginID: user });
    result = result[0];
    console.log("result=", result)
    // result = result.filter(item => (item.LoginID === user) && (item.Password === Password));
    /*  console.log('result.LoginID ', result.LoginID, 'result.Password', result.Password);
     console.log('user', user, 'Password', Password);
  */
    let Name = result.Name;
    let RolesID = result.RolesID
    if ((result.LoginID == user) && (result.Password == Password)) {
        // res.send(result)
        res.send(formatData({ code: 1, data: { Name, RolesID } }))
    } else {
        res.send(formatData({ code: 0 }))
    }
})

// 获取单个用户信息、
router.get('/:id', async (req, res) => {

    //假如设置分页的话，将page，size传过去
    const { page = 1, size = 5 } = req.query;
    const limit = size * 1;
    const skip = (page - 1) * size;
    //过滤密码，让密码不显示field: { password: false }
    const result = await mongo.find('user', {}, { limit, skip, field: { password: false } })
    res.send(formatData({ data: result }));
})

//模糊搜索
router.get('/mhsearch', async (req, res) => {
    // mongo
    const { pageNum, pageSize, fieldtype, value } = req.query;
    const limit = pageSize * 1;
    const skip = (pageNum - 1) * pageSize;
    let o = {};
    value ? o[fieldtype] = value * 1 : "";
    console.log(o);
    const result = await mongo.find('order', o, { limit, skip })
    res.send(formatData({ data: result }));
})


router.put('/:id', async (req, res) => {
    const { id } = req.params;
    let { LoginID, Name, RolesID, DepartmentID, Age, Gender } = req.body;


    let newData = { LoginID, Name, RolesID, DepartmentID, Age, Gender }
    /*  if (password) {
         password = md5(password);
         newData.password = password
     } */

    try {
        await mongo.update('user', { _id: id }, { $set: newData });
        res.send(formatData({ data: { _id: id, ...newData } }))
    } catch (err) {
        // console.log('err=',err);
        res.send(formatData({ code: 0 }))
    }


})
module.exports = router;