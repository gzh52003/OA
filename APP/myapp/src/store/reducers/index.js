//导入redux
import {combineReducers} from 'redux'

import userReducer from './user'
import commonReducer from './common'

//把多个reducer合并成一个reducer
const reducer = combineReducers({
    user:userReducer,
    common:commonReducer
})

//导出reducer模块
export default reducer;