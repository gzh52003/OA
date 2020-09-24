// 绩效页面

import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import { createForm } from 'rc-form';
import { NavBar, Icon, Tabs, List, TextareaItem } from 'antd-mobile';
import '../css/Performan.scss'

const tabs = [
    { title: '发起提交' },
    { title: '查看数据' },
];

class Performanc extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    componentDidMount() {
        // this.autoFocusInstautoFocusInst.focus();
    }
    render() {
        console.log(2, this.props.form);
        const { getFieldProps } = this.props.form;
        console.log(3, getFieldProps);
        return (<div>
            <NavBar
                className="zpheader"
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => console.log('onLeftClick')}
                rightContent={[
                    <Icon key="0" type="ellipsis" />,
                ]}
            >绩效自评</NavBar>
            {/* 内容 */}

            <Tabs tabs={tabs} initialPage={2} className="pertab" style={{ height: '100%' }}>
                <div className="kong" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', }}>

                    <List renderHeader={() => '上月工作任务'} key="0">
                        <TextareaItem
                            {...getFieldProps('count', {
                                Value: '请输入...',
                            })}
                            rows={5}
                            count={100}
                        />
                    </List>

                    <List renderHeader={() => '实际完成工作任务'} key="1">
                        <TextareaItem
                            {...getFieldProps('1', {
                                initialValue: '请输入...',
                            })}
                            rows={5}
                            count={100}
                        />
                    </List>


                </div>
                <div
                    className="kong"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff', }}>
                    暂无数据
                </div>

            </Tabs>



        </div>

        )
    }
}
const Performan = createForm()(Performanc);
export default Performan
