import React,{Suspense, lazy } from 'react';
import { SearchBar, Button, WhiteSpace, WingBlank,List,NoticeBar } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;
import '../../../css/ViewData.scss';
import request from '@/utils/request';
class ViewData extends React.Component {
  
  state = {
    leaveRecList:[],
    number:"",
  };
  
  async componentDidMount(){
    const data = await request.get('/leaveRec');
    this.state.leaveRecList = data;
    // console.log("data",data);
    this.setState({
      leaveRecList:data,
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
  gotoPage(){
    window.location.reload()
  }

  

    render(){
      // console.log(this.props);
      const {number,leaveRecList} = this.state;
        return(          
          <div className="ViewData">
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
                      <span className="apPerson">由<b>小李</b>提交</span>
                      <b className="revoke"><i>李周周</i>处理中</b>
                    </Brief>
                  </Item>
                </List>
              )
            }
            <div style={{ margin: '40px 0 0 0', backgroundColor: 'white',padding:'0 20px 20px' }} className="ButtonList">
              <Button type="primary" onClick={this.gotoPage}>新增请假</Button>
            </div>
          </div>
        )
    }
}

export default ViewData;