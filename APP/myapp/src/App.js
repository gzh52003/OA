import React, { useState } from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import { TabBar, NavBar, Icon } from 'antd-mobile';
import {
  UserOutlined,
  TeamOutlined,
  HomeOutlined,
  BarChartOutlined
} from '@ant-design/icons';
import Statistics from './views/Statistics'
import Home from './views/home'
// import Login from './views/Login'

import MailListTab from './views/MailListTab'
import MineTab from './views/MineTab'




@withRouter
class App extends React.Component {
  state = {
    selectedTab: 'homeTab',
    hidden: false,
    fullScreen: false,
  }

  renderContent(pageText) {

    return (
      <>
        <NavBar
          mode="light"
          icon={<Icon type="left" color="#000" />}
          onLeftClick={() => { this.props.history.goBack(); console.log("---------", history, this) }}
          rightContent={[
            // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" color="#000" />,
          ]}
        >移动门户</NavBar>
        <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center',paddingTop:'3rem' }}>
          {
            pageText === "homeTab" ? <Home props={this.props} />
              :
              pageText === "classTab" ? <Statistics props={this.props} />
                :
                pageText === "mailListTab" ? <MailListTab props={this.props} />
                  : <MineTab props={this.props} />
          }

        </div>
      </>
    );
  }

  render() {
    console.log('App.props', this.props)
    return (
      <>
        <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : {}}>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={this.state.hidden}
          >
            <TabBar.Item
              title="首页"
              key="home"
              icon={<HomeOutlined />}
              selectedIcon={<HomeOutlined />}
              selected={this.state.selectedTab === 'homeTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'homeTab',
                });
              }}
            >
              {this.renderContent('homeTab')}
            </TabBar.Item>
            <TabBar.Item
              icon={<BarChartOutlined />}
              selectedIcon={<BarChartOutlined />}
              title="统计"
              key="class"
              selected={this.state.selectedTab === 'classTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'classTab',
                });
              }}
            >
              {this.renderContent('classTab')}
            </TabBar.Item>
            <TabBar.Item
              icon={<TeamOutlined />}
              selectedIcon={<TeamOutlined />}
              title="通讯录"
              key="mailList"
              dot
              selected={this.state.selectedTab === 'mailListTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'mailListTab',
                });
              }}
            >
              {this.renderContent('mailListTab')}
            </TabBar.Item>
            <TabBar.Item
              icon={<UserOutlined />}
              selectedIcon={<UserOutlined />}
              title="我的"
              key="mine"
              selected={this.state.selectedTab === 'mineTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'mineTab',
                });
              }}
            >
              {this.renderContent('mineTab')}
            </TabBar.Item>
          </TabBar>
        </div>
      </>
    );
  }

}

export default App;
