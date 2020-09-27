/* 
    菜单的显示和隐藏
 */
const initState = {
    showMenu:true
}

//
function reducer(state=initState,action){
    switch (action.type) {
        case 'show_menu':
            return {
                ...state,
                showMenu:action.show
            };
    
        default:
            return state;
    }
}

//导出
export default reducer;