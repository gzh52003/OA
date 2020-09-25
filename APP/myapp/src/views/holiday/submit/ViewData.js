import React,{Suspense, lazy } from 'react';
import { SearchBar, Button, WhiteSpace, WingBlank,List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;
import '../../../css/ViewData.scss';
import request from '@/utils/request';
class ViewData extends React.Component {
  state = {
    leaveRecList:[],
  };
  async componentDidMount(){
    const data = await request.get('/leaveRec');
    this.state.leaveRecList = data;
    this.setState({
      leaveRecList:data,
    })
    console.log(this.setState.leaveRecList)

  }

    render(){
      const {leaveRecList} = this.state;
        return(          
          <div className="ViewData">
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
                      <b className="revoke" onClick={this.onRevoke}>撤销</b>
                    </Brief>
                  </Item>
                </List>
              )
            }
            
           
          </div>
        )
    }
}

export default ViewData;