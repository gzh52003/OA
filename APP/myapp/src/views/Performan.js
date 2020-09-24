// 绩效页面

import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import { createForm } from 'rc-form';
import { NavBar, Icon, Tabs, List, TextareaItem, Steps, WingBlank, Button, WhiteSpace, Switch } from 'antd-mobile';
import '../css/Performan.scss'
const Step = Steps.Step;
const tabs = [
    { title: '发起提交' },
    { title: '查看数据' },
];

class Performanc extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            checked1: true,
        };
    }
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

            <Tabs tabs={tabs} initialPage={0} className="pertab" style={{ height: '100%' }}>
                <div className="kong" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', }}>

                    <List renderHeader={() => '上月工作任务'}>
                        <TextareaItem
                            {...getFieldProps('count', {
                                Value: '请输入...',
                            })}
                            rows={5}
                            count={1000}
                        />
                    </List>

                    <List renderHeader={() => '实际完成工作任务'}>
                        <TextareaItem
                            {...getFieldProps('1', {
                                initialValue: '请输入...',
                            })}
                            rows={5}
                            count={1000}
                        />
                    </List>
                    <List renderHeader={() => '本月工作计划'} style={{ borderBottom: '20px solid #F7F7F7' }}>
                        <TextareaItem
                            {...getFieldProps('2', {
                                initialValue: '请输入...',
                            })}
                            rows={5}
                            count={1000}
                        />
                    </List>
                    <h4 style={{ width: '100%', height: '50px', fontSize: '20px', lineHeight: '50px', marginLeft: '15px' }}>发送到群里</h4>
                    {/* 流程 */}
                    <div className="liuc">
                        <div className="lctitle">
                            <div className="sub-title">流程</div>
                            <WhiteSpace />
                            <Steps size="small" current={1}>
                                <Step title="审批人" description="请选择审批人" />
                                <Step title="抄送人" description="请选择抄送人" />
                            </Steps>
                            <List.Item
                                extra={<Switch
                                    checked={this.state.checked}
                                    onChange={() => {
                                        this.setState({
                                            checked: !this.state.checked,
                                        });
                                    }}
                                />}
                            >通过聊天发送给审批人</List.Item>
                        </div>
                    </div>
                    <p className="yiwen">有疑问？找钉小秘</p>
                    <div className="tij">
                        <Button type="primary" className="pfbtn">提交</Button>
                    </div>

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
