const { formatData,UUID } = require('./tools');
//导入公共库
const moment = require('moment');
const mongo = require('./mongo');


async function send(data={}){
    const res_proc = await insertwf_proc(data);
    console.log("res_proc=",res_proc)
    
    if(!res_proc) return {msg:'插入wf_proc失败！',code:0}
    
    data = {
        ...data,
        ProcID:res_proc
    }
    console.log("ProcID:res_proc=",data);
    const res_task = await insertwf_task(data);
    console.log('--------',res_task);
    if(res_task)return {msg:'插入wf_task失败！',code:1}
    return {msg:'插入失败！',code:0}
}
//封装一个函数，功能是插入实例表
async function insertwf_proc(data={}){
    // console("dataaaaaaaaa=",data)
    console.log("data.BusinessID=",data.BusinessID);
    if(!data.BusinessID)return false
    let newData = {
        ProcID:UUID(),
        BusinessID:data.BusinessID,
        ProcName:data.ProcName,
        UserID:data.UserID,
        MatterType:data.MatterType,
        DepartmentID:data.DepartmentID,
        CreateDate:formatDate()
    };
    console.log("输出值：",newData);
    try{
        await mongo.insert('wf_proc',newData);
        return newData.ProcID
    }catch(err){
        console.log("err",err)
        return false
    }
    
}

//封装一个函数，功能是更新步骤
async function insertwf_task(data={}){
    console.log("insertwf_task=",data)
    const ProcID = data.ProcID;
    //先判断ProcID是否已经存在表中，如果存在则获取TaskID，如果不存在则插入数据
    const TaskID = await getTaskID(ProcID)
    console.log("TaskID--",TaskID);
    if(!TaskID) return false
    let newData = {
        TaskID,
        ProcID:data.ProcID,
        ProcName:data.ProcName,
        PreUser:data.ProcName,
        CurrentUser:data.CurrentUser,
        Opinion:data.Opinion,
        ReceiveTime:formatDate(),
        // ApprovalTime
    };
    console.log("newData:",newData);
    try{
        await mongo.insert('wf_task',newData);
        return true
    }catch(err){
        console.log("err啦啦啦啦=",err)
        return false
    }
}

//查询insertwf_task数据表
async function getTaskID(ProcID){
    console.log("ProcID=",ProcID)
    if(!ProcID)return false
    
    let TaskID = 1

    const result = await mongo.find('wf_task', {ProcID},{total:1})
    console.log("reasult:",result);
    TaskID = result.total+1
    return TaskID
    
}

//格式化时间 不传的时候默认当前时间YYYY-MM-DD HH:mm:ss
function formatDate(date){
    if(!date){
        date = Date.now()
    }
    //判断是不是时间
    try {
        date = moment(date).format('YYYY-MM-DD HH:mm:ss')
    } catch (error) {
        date = moment().format('YYYY-MM-DD HH:mm:ss')
    }
    return date
}
module.exports = {
    insertwf_task,
    insertwf_proc,
    send,
    formatDate
}


