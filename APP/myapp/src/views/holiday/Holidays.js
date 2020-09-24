import React,{Suspense, lazy } from 'react';
import { HashRouter, BrowserRouter, Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom';
import { Grid , TabBar , NavBar, Icon , SwipeAction, List , NoticeBar, WhiteSpace , Popover} from 'antd-mobile';
import HoList from './HoList'
import HoRec from './HoRec'

import {
  ProfileOutlined,
  FieldTimeOutlined,
} from '@ant-design/icons';


@withRouter




class Holidays extends React.PureComponent {
  state = {
    sec:[
      {
        text:"我要请假",
        src:<ProfileOutlined />,
      },{
        text:"请假记录",
        src:<FieldTimeOutlined />,
      }
    ],
    disabled: false,
    selectedTab: '我要请假',
    hidden: false,
    fullScreen: false,
  }

  renderContent(pageText) {
    return (
      <div style={{ textAlign: 'center' }}>
        <div>{pageText}</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden,
            });
          }}
        >
        </a>

        <a style={{ display: 'block',  color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              fullScreen: !this.state.fullScreen,
            });
          }}
        >
        </a>
      </div>
    );
  }
  
  render() {
    console.log('Holidays.props',this.props)
    const {sec} = this.state;
    const Item = List.Item;
    
    return (
      
      <div className="Holidays">
    
      {/* TabBar */}
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="我要请假"
            key="Life"
            icon={<ProfileOutlined />
            }
            selectedIcon={<ProfileOutlined />
            }
            selected={this.state.selectedTab === '我要请假'}
            
            onPress={() => {
              this.setState({
                selectedTab: '我要请假',
              });
            }}
            data-seed="logId"
          >
            {this.renderContent(<HoList />)}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <FieldTimeOutlined />
            }
            selectedIcon={
              <FieldTimeOutlined />
            }
            title="请假记录"
            key="Koubei"
           
            selected={this.state.selectedTab === '请假记录'}
            onPress={() => {
              this.setState({
                selectedTab: '请假记录',
              });
            }}
            data-seed="logId1"
          >
            {this.renderContent(<HoRec />)}
          </TabBar.Item>
          
        </TabBar>
      </div>
      </div>
    );
  }
}

export default Holidays;
