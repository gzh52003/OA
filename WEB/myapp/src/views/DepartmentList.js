// 部门列表、查询
import React from 'react';
import DepartReaet from '../Reset/DepartReaet'
import { Breadcrumb, Collapse } from 'antd';
import { HomeOutlined, DatabaseOutlined, TableOutlined } from '@ant-design/icons';

const { Panel } = Collapse;
function callback(key) {
    console.log(key);
}

function DepartmentList() {
    return <div>

        {/* 面包屑导航 */}
        <Breadcrumb style={{ marginBottom: '10px' }}>
            <Breadcrumb.Item href="">
                <HomeOutlined />
                <span>我的首页</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
                <DatabaseOutlined />
                <span>部门管理</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/#ToDoListAll">
                <TableOutlined />
                <span>部门列表</span>
            </Breadcrumb.Item>
        </Breadcrumb>
        {/* 渲染内容 */}
        <Collapse onChange={callback} style={{ marginTop: '30px' }}>
            <Panel header="财务部" key="1">
                <Collapse defaultActiveKey="1">
                    <Panel header="成员列表" key="1">
                        <DepartReaet k={1} />
                    </Panel>
                </Collapse>
            </Panel>
            <Panel header="后勤部" key="2">
                <Collapse defaultActiveKey="2">
                    <Panel header="成员列表" key="2">
                        <DepartReaet k={2} />
                    </Panel>
                </Collapse>
            </Panel>
            <Panel header="公关部" key="3">
                <Collapse defaultActiveKey="3">
                    <Panel header="成员列表" key="3">
                        <DepartReaet k={3} />
                    </Panel>
                </Collapse>
            </Panel>
            <Panel header="技术部" key="4">
                <Collapse defaultActiveKey="4">
                    <Panel header="成员列表" key="4">
                        <DepartReaet k={4} />
                    </Panel>
                </Collapse>
            </Panel>
            <Panel header="运营部" key="5">
                <Collapse defaultActiveKey="5">
                    <Panel header="成员列表" key="5">
                        <DepartReaet k={5} />
                    </Panel>
                </Collapse>
            </Panel>
        </Collapse >
    </div >
}


export default DepartmentList;