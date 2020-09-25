import React,{Suspense, lazy } from 'react';
import { NavBar, Icon } from 'antd-mobile';


class TopBar extends React.PureComponent {
    render(){
        console.log("TopBar",this.props)
        const { getFieldProps, getFieldError } = this.props.form;
        return(
            <div className="TopBar">
            {/* 导航栏 */}
            <NavBar
                mode="light"
                icon={<Icon type="left" color="#000"/>}
                onLeftClick={() => console.log('onLeftClick')}
                rightContent={[
                <Icon key="1" type="ellipsis" color="#000" />,
                ]}
                leftContent={[
                <Icon key="0" type="cross" color="#000" style={{ marginRight: '16px' }} />,
                ]}>请假
            </NavBar>
            </div>
        )
    }
}

export default TopBar;