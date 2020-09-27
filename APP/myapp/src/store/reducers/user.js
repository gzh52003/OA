//刷新时，先从localstorage中获取用户信息
let currentUser = localStorage.getItem('currentUser');
//抛出错误，防止程序报错
try {
    currentUser = JSON.parse(currentUser) || {};
} catch (error) {
    currentUser = {}
}

//初始化用户信息对象
const initState = {
    ...currentUser
}

//封装操作函数
function reducer(state=initState,action){
    switch (action.type) {
        case 'login':
            localStorage.setItem('currentUser',JSON.stringify(action.user));
            //debugger
            // action.dispatch()
            return action.user;
            
        case 'logout':
            localStorage.removeItem('currentUser');
            return {};
            
        case 'update_user':
            return {
                ...state,
                ...action.user
            };
            
        default:
            return state;
    }
}
export default reducer;