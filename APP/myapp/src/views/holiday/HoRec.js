import React from 'react';
import { withRouter } from 'react-router-dom';
import {  NavBar, Icon,List,NoticeBar } from 'antd-mobile';

import request from '@/utils/request';
import '../../css/HoRec.scss';

const Item = List.Item;
const Brief = Item.Brief;



class HoRec extends React.Component {
  state = {
    disabled: false,
    number:'',
    leaveRecList:[],
  }
  async componentDidMount() {
    // console.log()
    //this.autoFocusInst.focus();
    // onSubmit = () =>{
    //   console.log("111=",11111)
    // }
    const data = await request.get('/leaveRec');
    this.state.leaveRecList = data;
    console.log("data",data.length);
    this.setState({
      number:data.length,
    })
  }
  onRevoke = async (id) =>{
    console.log(id)
    const data = await request.remove('/leaveRec/'+ id);
    this.setState({
      leaveRecList:this.state.leaveRecList.filter(item=>item._id !== id),
      number:this.state.leaveRecList.filter(item=>item._id !== id).length
    })
  }

  render() {
    const { number ,leaveRecList} = this.state;
    return (
      
      <div className="HoRec">
        {/* 导航栏 */}
        <NavBar
          mode="light"
          icon={<Icon type="left" color="#000"/>}
          onLeftClick={() => {this.props.history.goBack()}}
          leftContent={[
            <Icon key="0" type="cross" color="#000" style={{ marginRight: '16px' }} />,
          ]}>请假记录
        </NavBar>

        {/* 内容 */}
        <div className="leaveRec">
          <NoticeBar  icon={null}>本月(<span>{number}</span>)</NoticeBar>
          

          {
              leaveRecList.map((item,index) =>
                // <Menu.Item key={item.path} icon={item.icon}>
                //   {item.text}
                // </Menu.Item>
                
                <List className="my-list" key={index}>
                  <Item  align="top" multipleLine className="recodeTit">
                    <span className="whoPost">小李提交的请假</span><b className="time"></b>
                    <Brief className="recDetailed"> 
                      <p>请假类型:
                        <span>{item.type}
                          {/* <switch ({item.type}) {
                            case value:
                              
                              break;
                          
                            default:
                              break;
                          }
                          </switch> */}

                          {/* {switch ({item.type}) {
                            case value:
                              
                              break;
                          
                            default:
                              break;
                          }
                          } */}
                          {/* {( ()=>{
                              switch({item.type}){
                                  case "1":return <img src={gift1}/>; break;
                                  case "2":return <img src={gift2}/>; break;
                                  case "3":return <img src={gift3}/>; break;
                                  default:return null;
                                }
                              }
                          )()} */}
                   
                        </span>
                      </p>
                      <p>开始时间:<span>{item.start}</span></p>
                      <p>结束时间:<span>{item.end}</span></p>
                      <span className="apPerson"><i>李周周</i>处理中</span>
                      <b className="revoke" onClick={this.onRevoke.bind(this,item._id)}>撤销</b>
                    </Brief>
                  </Item>
                </List>
              )
            }
        </div>

        

      </div>
    );
  }
}

export default HoRec;



