const express = require('express');
const router = express.Router();
const query = require('../utils/mysql');
const mongo = require('../utils/mongo');
const { formatData, md5,UUID } = require('../utils/tools')

router.post('/',async(req,res)=>{
    let {user} = req.body;
    
    const hash = crypto.createHash('md5');
    hash.update(user.password+password_privateKey); // 加盐 盐值
    user.password = hash.digest('hex');
    
    user.password = md5(user.password)
    let result
    try{
        result = await mongo.insert('user',{...user});
        res.send(formatData());
    }catch(err){
        res.send(forMatData({code:0}))

    }
})

router.get('/', async (req, res) => {
    console.log("UUID:",UUID());
    
    // mongo
    const { page = 1, size = 10 } = req.query;
    const limit = size * 1;
    const skip = (page - 1) * size;
    const result = await mongo.find('user', {}, { limit, skip, field: { password: false } })
    res.send(formatData({ data: result }));
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
//检测账号
router.get('/check',async (req,res)=>{
    const {LoginID,_id} = req.query;
    
    let result = await mongo.find('user',{LoginID});
    result = result.filter(item=>item._id != _id);
    console.log("输出过滤结果result:",result);
    if(result.length>0){
        res.send(formatData({code:0}))
    }else{
        res.send(formatData())
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

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    let { password, age, gender } = req.body;


    let newData = { age, gender }
    if (password) {
        password = md5(password);
        newData.password = password
    }

    try {
        await mongo.update('user', { _id: id }, { $set: newData });
        res.send(formatData({ data: { _id: id, ...newData } }))
    } catch (err) {
        // console.log('err=',err);
        res.send(formatData({ code: 0 }))
    }


})
module.exports = router;