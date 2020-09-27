/* 
    saga 配置
    使用ES6新特性 ： Generator
*/
//导入saga的内部方法
import {takeEvery,takeLatest,put,apply,call} from 'redux-saga/effects';
//导入请求封装好的方法
import request from '@/utils/request'

//获取用户新
function* getUser(action){
    console.log("getUser=",action);
    //发起请求获取用户信息
    const {data} = yield call(request.get,'/user/'+action.userid);
    console.log('user=',data);

    //put=dispatch
    yield put({type:action.type.replace('_async',''),user:data})
}

//初始化函数
function* init(){
    //监听用户dispatch操作
    console.log('init');
    yield takeLatest('update_user_async',getUser);
}

//导出初始值
export default init;