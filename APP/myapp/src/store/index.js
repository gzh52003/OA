/**
 * redux核心概念
    * store
    * reducer   state的修改逻辑
        * 参数
            * state
            * action
    * action
        * 格式：{type:''}
 */
//创建仓库
import { createStore,applyMiddleware,compose } from 'redux';
//导入处理函数 // reducer必须为纯函数
import reducer from './reducers';
//redex调试工具
import { composeWithDevTools } from 'redux-devtools-extension';
//导入saga
import mysaga from './saga';
// saga使用步骤1：引入saga
import createSagaMiddleware from 'redux-saga';

//2:创建saga中间件
const sagaMiddleware = createSagaMiddleware();

//3:创建仓库 ，把saga中间件与store进行结合
let enhanser = applyMiddleware(sagaMiddleware);
//合并中间件
enhanser = composeWithDevTools(enhanser)

//创建store
const store = createStore(reducer,enhanser);

//saga 使用4：运行saga配置
sagaMiddleware.run(mysaga);

export default store;

// 3. 使用
// 获取：store.getState()
// 修改：store.dispatch(action)
// 监听：store.subscribe(fn)