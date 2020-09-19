const crypto = require('crypto');
//引入根据时间戳生成的随机id
const { v1: uuidv1 } = require('uuid');

function formatData({code=1,data=[],msg='success'}={}){

    if(code === 0){
        msg = 'fail';
    }

    return {
        code,
        data,
        msg
    }
}


function md5(data,privateKey='laoxie'){

    const hash = crypto.createHash('md5');
    hash.update(data+privateKey); // 加盐 盐值
    const result = hash.digest('hex');

    return result;
}

//生成uuid
function UUID(){
    return uuidv1();
}


module.exports = {
    formatData,
    md5,
    UUID
}