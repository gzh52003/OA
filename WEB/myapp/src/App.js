import React, { Suspense, lazy } from 'react';
import logo from './logo.svg';
import './App.scss';
import { HashRouter, BrowserRouter, Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import {
  HomeOutlined,
  FileDoneOutlined,
  ScheduleOutlined,
  FieldTimeOutlined,
  FileOutlined,
  ContactsOutlined,
  FileTextOutlined,
  ProfileOutlined,
  ReadOutlined,
  TagsOutlined,
  SolutionOutlined,
  UserAddOutlined,
  TableOutlined,
  FileAddOutlined,
  DatabaseOutlined,
  UserOutlined,
  InsertRowAboveOutlined,
} from '@ant-design/icons';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
// @withRouter
import LoginApp from './LoginApp';
//引入页面组件
// const Home = import("./views/Home");
import Home from "./views/Home";
const ToDone = lazy(() => import("./views/ToDone"));
const ToDoListAll = lazy(() => import("./views/ToDoListAll"));
const ToDoneAll = lazy(() => import("./views/ToDoneAll"));
const ToDoneAllYes = lazy(() => import("./views/ToDoneAllYes"));
const VacDays = lazy(() => import("./views/VacDays"));
const PersonnelMan = lazy(() => import("./views/PersonnelMan"));
const VacMan = lazy(() => import("./views/VacMan"));
const AdminMan = lazy(() => import("./views/AdminMan"));
const Other = lazy(() => import("./views/Other"));
const UserList = lazy(() => import("./views/UserList"));
const UserAdd = lazy(() => import("./views/UserAdd"));
const DepartmentList = lazy(() => import("./views/DepartmentList"));
const DepartmentAdd = lazy(() => import("./views/DepartmentAdd"));
const Login = lazy(() => import("./Login/Login"));

//点击退出

class App extends React.PureComponent {
  state = {
    /* 一级菜单 */
    menu: [{
      text: "我的首页",
      name: "Home",
      icon: <HomeOutlined />,
      path: '/Home',

    }, {
      text: "我的待办",
      name: "ToDone",
      icon: <ScheduleOutlined />,
      path: '/AllList/todo'
    }, {
      text: "我的已办",
      name: "ToDone",
      icon: <FileDoneOutlined />,
      path: '/AllList/done'
      // path: '/ToDone'
    },
    {
      text: "发起事件",
      name: "InitiatingMatters",
      icon: <FileAddOutlined />,
      path: '/PersonnelMan'
    }
    ],
    /* 二级菜单 */
    secmenu: [
      [
        {
          text: "我的待办",
          name: "ToDoList",
          icon: <ScheduleOutlined />
        },
        {
          text: "待办事项总数",
          name: "ToDoListAll",
          icon: <FieldTimeOutlined />,
          path: '/ToDoListAll'
        },
        {
          text: "已办事项总数",
          name: "ToDoneAll",
          icon: <FileOutlined />,
          path: '/ToDoneAll'
        },
        {
          text: "昨日已办总数",
          name: "ToDoneAllYes",
          icon: <FileOutlined />,
          path: '/ToDoneAllYes'
        },
        {
          text: "本月休假天数",
          name: "VacDays",
          icon: <ContactsOutlined />,
          path: '/VacDays'
        }
      ],
      [
        {
          text: "发起事件",
          name: "InitiatingMatters",
          icon: <FileAddOutlined />,
        },
        {
          text: "人事管理",
          name: "PersonnelMan",
          icon: <FileTextOutlined />,
          path: '/PersonnelMan'
        },
        {
          text: "假勤管理",
          name: "VacMan",
          icon: <ProfileOutlined />,
          path: '/VacMan'
        },
        {
          text: "行政管理",
          name: "AdminMan",
          icon: <ReadOutlined />,
          path: '/AdminMan'
        },
        {
          text: "其他",
          name: "Other",
          icon: <TagsOutlined />,
          path: '/Other'
        },
      ],
      [
        {
          text: "用户管理",
          name: "UserManagement",
          icon: <UserOutlined />,
        },
        {
          text: "用户列表",
          name: "UserList",
          icon: <SolutionOutlined />,
          path: '/UserList',
        },
        {
          text: "用户添加",
          name: "UserAdd",
          icon: <UserAddOutlined />,
          path: '/UserAdd',
        },
      ],
      [
        {
          text: "部门管理",
          name: "DepartmentAdmin",
          icon: <DatabaseOutlined />,
        },
        {
          text: "部门列表",
          name: "DepartmentList",
          icon: <TableOutlined />,
          path: '/DepartmentList'
        },
        {
          text: "部门成员添加",
          name: "DepartmentAdd",
          icon: <InsertRowAboveOutlined />,
          path: '/DepartmentAdd'
        },
      ],
    ],
    collapsed: false,
  }
  gotoPage = ({ key }) => {
    this.setState({
      current: key
    })
    this.goto(key);
    // this.props.history.replace(path);
  }
  goto = (path) => {
    this.props.history.push(path);
  }
  componentWillMount() {
    const { pathname } = this.props.location;
    this.setState({
      current: pathname
    })


  }

  Loginout = () => {
    // console.log(666666);
    localStorage.removeItem('token')
    this.props.history.push('/Login')
    console.log('appproprs', this.props.history.push);
    this.render()
  }

  render() {

    let user = localStorage.getItem("token")
    let username = '';
    let RolesID = '';
    if (!user) {
      username = ""
    } else {
      user = user.split(',')
      username = user[0].slice(2, -1)
      //角色
      RolesID = user[1].slice(1, -2)
    }
    const { menu, secmenu } = this.state;
    if (!user) {
      return <LoginApp />
    } else {
      return (
        <div className="App">
          {<Layout>
            <Header className="header">
              <div className="logo">
                <img src="../logo.png" alt="" />
                <span>后台管理系统</span>
                {/* onClick={() => { this.Loginout }} */}
                <em style={{ position: "absolute", right: '70px', top: '5px', fontSize: '16px' }}>欢迎{username}！</em>
                <Button type="link" style={{ position: "absolute", right: '10px', top: '14px' }} onClick={this.Loginout}>退出</Button >
              </div>

            </Header>
            <Layout style={{ minHeight: '100vh' }}>
              <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                <div className="logo" />
                <Menu onClick={this.gotoPage}
                  theme="dark" defaultSelectedKeys={['1']} >
                  {
                    menu.map(item =>
                      <Menu.Item key={item.path} icon={item.icon}>
                        {item.text}
                      </Menu.Item>
                    )
                  }
                  {/* 渲染二层菜单 */}
                  {secmenu.map(item => {
                    return (
                      <SubMenu
                        key={item[0].name}
                        icon={item[0].icon}
                        title={item[0].text}
                      >
                        {item.map((secitem, index) => {
                          if (index != 0) {
                            return (
                              <Menu.Item key={secitem.path} icon={secitem.icon}>
                                {secitem.text}
                              </Menu.Item>
                            );
                          }
                        })}
                      </SubMenu>
                    );
                  })}
                </Menu>
              </Sider>
              <Layout style={{ padding: '0 24px 24px' }}>
                <Content
                  className="site-layout-background"
                  style={{
                    padding: 10,
                    margin: 0,
                    minHeight: 280,
                  }}
                >
                  <Suspense fallback={<div>loading...</div>}>
                    <Switch>
                      <Route path="/Home" component={Home} />
                      <Route path="/ToDone" component={ToDone} />
                      <Route path="/AllList/:ShowType" component={ToDoListAll} />
                      <Route path="/ToDoneAll" component={ToDoneAll} />
                      <Route path="/ToDoneAllYes" component={ToDoneAllYes} />
                      <Route path="/VacDays" component={VacDays} />
                      <Route path="/PersonnelMan" component={PersonnelMan} />
                      <Route path="/VacMan" component={VacMan} />
                      <Route path="/AdminMan" component={AdminMan} />
                      <Route path="/Other" component={Other} />
                      <Route path="/UserList" component={UserList} />
                      <Route path="/UserAdd" component={UserAdd} />
                      <Route path="/DepartmentList" component={DepartmentList} />
                      <Route path="/DepartmentAdd" component={DepartmentAdd} />
                      <Route path="/notfound" render={() => <div>404</div>} />
                      <Redirect from="/" to="/Home" exact />
                    </Switch>
                  </Suspense>
                </Content>
              </Layout>
            </Layout>
          </Layout>}
        </div >
      );
    }
  }

}

App = withRouter(App);
export default App;