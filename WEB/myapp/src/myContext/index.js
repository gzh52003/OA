import React from 'react';

// 1.创建Context，给它一个初始值
const defaultData = { key: 0 }
const myContext = React.createContext(defaultData);

export default myContext