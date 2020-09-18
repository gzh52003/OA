const { Router, urlencoded, json } = require('express');
// express.json===bodyParse.json, ....
const session = require('express-session')
const token = require('../utils/token');
const cors = require('../filter/cors')

//引入配置文件
const config = require('../config.json')


const router = Router();


const userRouter = require('./user');
const regRouter = require('./reg');
const loginRouter = require('./login');
const vcodeRouter = require('./vcode');
const uploadRouter = require('./upload');

const { formatData } = require('../utils/tools');

// CORS跨域
router.use(cors);

// 数据格式化中间件
router.use(urlencoded({ extended: false }), json())



// 使用session会话
// 通过req.session获取存入会话的数据
router.use(session({
    secret: 'laoxie',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        // 设置cookie有效期
        maxAge: 1000*60*60*2
    }
}))


 router.use('/user', userRouter);

// 注册
router.use('/reg', regRouter);

// 登录
router.use('/login', loginRouter);

// 上传
router.use('/upload', uploadRouter);

// 校验token
router.get('/jwtverify',(req,res)=>{
    const {authorization} = req.query;
    
    if(token.verify(authorization)){
        res.send(formatData())
    }else{
        res.send(formatData({code:0}))
    }
});


// 验证码
router.use('/vcode', vcodeRouter);
module.exports = router;