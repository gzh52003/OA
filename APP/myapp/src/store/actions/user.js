export function login(user){
    return{
        type:'login',
        user
    }
}
export function logout(){
    return{
        type:'logout'
    }
}
/* 默认导出default对象 */
export default{
    login,
    logout
}