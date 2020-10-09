import React, { Suspense, lazy } from 'react';
const App = lazy(() => import("@/App"));
const Login = lazy(() => import("~/Login"));

const TodoList = lazy(() => import("~/TodoList"));
const Approval = lazy(() => import("~/approval/Approval"));
const Holidays = lazy(() => import("~/holiday/Holidays"));
const Performan = lazy(() => import("~/Performan"));
const HoFill = lazy(() => import("~/holiday/HoFill"));
const HoRec = lazy(() => import("~/holiday/HoRec"));
const Select = lazy(() => import('~/holiday/Select'));
const ERROR = lazy(() => import('~/err/error'));


export const routerConfig = [
    {
        path:'/',
        component:App,
        auth:true,
        type:'CacheRoute'   //表示路由类型 ，如果需要使用keep-alive 则填写值为CacheRoute 否则 不填或者是Route
    },{
        path:'/home',
        component:App,
        auth:true,
        type:'CacheRoute'
    },{
        path:'/list/:isTodo',
        component:TodoList,
        auth:true,
        type:'Route'
    },{
        path:'/approval',
        component:Approval,
        auth:true,
    },{
        path:'/Holidays/compassLea/:id',
        component:HoRec,
        auth:true,
        type:'CacheRoute'
    },{
        path:'/Submit/Select',
        component:Select,
        auth:true
    },{
        path:'/Holidays/:id',
        component:HoFill,
        auth:true,
        type:'CacheRoute'
    },{
        path:'/Holidays',
        component:Holidays,
        auth:true,
        type:'CacheRoute'
    },{
        path:'/performan',
        component:Performan,
        auth:true,
        type:'CacheRoute'
    },{
        path:'/notfound',
        component:ERROR
    },{
        path:'/login',
        component:Login,
    },{
        path:'/404',
        component:ERROR
    }
];