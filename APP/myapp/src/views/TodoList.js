import React from 'react'
import { List,ListView } from 'antd-mobile';
import { Grid, NavBar, Icon, TabBar, WhiteSpace,Card } from 'antd-mobile';
import {
  EditTwoTone
} from '@ant-design/icons';

const Item = List.Item;
const Brief = Item.Brief;

import "@/css/todolist.scss"

const data = [
    {
      title: '外出调研（全国养猪场经营情况）-2020年9月10日至2021年12月',
      dept: '策划部',
      username:'小李',
      createDate:'2020-09-10',
      isTodo:true
    },
    {
      title: '外出调研（全国养猪场经营情况）-2020年9月10日至2021年12月',
      dept: '策划部',
      username:'小李',
      createDate:'2020-09-10',
      isTodo:true
    },
    {
      title: '外出调研（全国养猪场经营情况）-2020年9月10日至2021年12月',
      dept: '策划部',
      username:'老李',
      createDate:'2020-09-10',
      isTodo:false
    },
  ];
  //一页显示的条数
  const NUM_ROWS = 10;
  //第几页
  let pageIndex = 0;
  
  function genData(pIndex = 0) {
    console.log("执行getData，根据this.state.isTodo 获取代处理还是已处理");
    const dataBlob = {};
    for (let i = 0; i < NUM_ROWS; i++) {
      const ii = (pIndex * NUM_ROWS) + i;
      dataBlob[`${ii}`] = `row - ${ii}`;
    }
    console.log("dataBlob",dataBlob);
    return dataBlob;
  }
  
  class TodoList extends React.Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
        });
    
        this.state = {
          dataSource,
          isLoading: true,
          isTodo:this.props.match.path.includes('todo')
        };
        console.log("this.props",this.state.isTodo,this.props.match.path.includes('todo'))
    }
  
    componentDidMount() {
      //初始化 ajax请求数据
        setTimeout(() => {
          console.log("初始化获取数据");
          this.rData = genData();
          // console.log("this.rData",this.rData);
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.rData),
            isLoading: false,
          });
        }, 600);
    }
    onEndReached = (event) => {
        // load new data
        // hasMore: from backend data, indicates whether it is the last page, here is false
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        console.log('view拉到最底，触发加载更多事件', event);
        this.setState({ isLoading: true });
        setTimeout(() => {
            this.rData = { ...this.rData, ...genData(++pageIndex) };
            console.log("上拉加载更多获取更多数据",this.rData);
            this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
            });
        }, 1000);
    }
  
    render() {
        const separator = (sectionID, rowID) => (
          <div
            key={`${sectionID}-${rowID}`}
            style={{
              backgroundColor: '#F5F5F9',
              height: 8,
              borderTop: '1px solid #ECECED',
              borderBottom: '1px solid #ECECED',
            }}
          />
        );
        
        
        let datalist = data.filter((item)=>{
          return item.isTodo == this.state.isTodo
        })
        // console.log(data);
        let index = datalist.length - 1;
        const row = (rowID) => {
          if (index < 0) {
            index = datalist.length - 1;
          }
          const obj = datalist[index--];
          console.log("obj",obj);
          return (
            // <>
            
            <div key={rowID} style={{ padding: '0 15px' }}>
              
              {/* <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
                <img style={{ height: '64px', marginRight: '15px' }} src={obj.img} alt="" />
                <div style={{ lineHeight: 1 }}>
                  <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{obj.des}</div>
                  <div><span style={{ fontSize: '30px', color: '#FF6E27' }}>{rowID}</span>¥</div>
                </div>
              </div> */
              
            }

              <Item arrow="horizontal" align="top" thumb={obj.isTodo?<EditTwoTone twoToneColor="#52c41a" />:<EditTwoTone twoToneColor="#FF6E27" />} multipleLine  onClick={() => {console.log('打开待办')}}>
              {obj.title}
                        <Brief>{obj.dept}-{obj.username} &nbsp; 送达时间:{obj.createDate}</Brief>
              </Item>
            </div>
            // </>
          );
        };
  
        return (
            <ListView
              ref={el => this.lv = el}
              dataSource={this.state.dataSource}
              renderHeader={() => <NavBar
                mode="light"
                icon={<Icon type="left" color="#000" />}
                onLeftClick={() => { this.props.history.goBack(); console.log("---------", history, this) }}
                rightContent={[
                  // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                  <Icon key="1" type="ellipsis" color="#000" />,
                ]}
              >{this.state.isTodo?'待处理事项':'已处理事项'}</NavBar>}
              renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                {this.state.isLoading ? '加载中...' : '加载更多'}
              </div>)}
              renderRow={row}
              renderSeparator={separator}
              className="am-list"
              // pageSize={4}
              style={{marginTop:'3rem'}}
              useBodyScroll
              onScroll={() => {  }}
              scrollRenderAheadDistance={500}
              onEndReached={this.onEndReached}
              onEndReachedThreshold={10}
            />
          );
    }
  }
export default TodoList