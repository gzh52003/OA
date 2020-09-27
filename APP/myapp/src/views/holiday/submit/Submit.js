import React,{Suspense, lazy } from 'react';
import { Picker, List, WhiteSpace,Tabs, Badge,NavBar ,Icon,NoticeBar,DatePicker,InputItem ,TextareaItem,ImagePicker, WingBlank, SegmentedControl,Steps, Button,Switch,Toast} from 'antd-mobile';
import { createForm, formShape } from 'rc-form';
import arrayTreeFilter from 'array-tree-filter';
import { district, provinceLite } from 'antd-mobile-demo-data';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';
// import { createForm } from 'rc-form';

import request from '../../../utils/request';

import '../../../css/Submit.scss';
import { withRouter } from 'react-router-dom';

const Step = Steps.Step;
const customIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" className="am-icon am-icon-md">
      <g fillRule="evenodd" stroke="transparent" strokeWidth="4">
        <path d="M21 0C9.402 0 0 9.402 0 21c0 11.6 9.402 21 21 21s21-9.4 21-21C42 9.402 32.598 0 21 0z" />
        <path fill="#FFF" d="M29 18.73c0-.55-.447-1-1-1H23.36l4.428-5.05c.407-.46.407-1.208 0-1.668-.407-.46-1.068-.46-1.476 0l-5.21 5.89-5.21-5.89c-.406-.46-1.067-.46-1.475 0-.406.46-.406 1.207 0 1.667l4.43 5.05H14.23c-.55 0-.998.45-.998 1 0 .554.448.97 1 .97h5.9v3.942h-5.9c-.552 0-1 .448-1 1s.448.985 1 .985h5.9v4.896c0 .552.448 1 1 1 .55 0 .968-.284.968-.836v-5.06H28c.553 0 1-.433 1-.985s-.447-1-1-1h-5.9v-3.94H28c.553 0 1-.418 1-.97z" />
      </g>
    </svg>
  )


const data = [];

const colors = [
  {
    label:
    (<div>
      <span>事假</span>
    </div>),
    value: 'compassLea',
  },
  {
    label:
    (<div>
      <span>调休</span>
    </div>),
    value: 'CompenLea',
  },
  {
    label:
    (<div>
      <span>病假</span>
    </div>),
    value: 'sickLea',
  },
  {
    label:
    (<div>
      <span>年假</span>
    </div>),
    value: 'annualLea',
  },
  {
    label:
    (<div>
      <span>产假</span>
    </div>),
    value: 'maternityLea',
  },
  {
    label:
    (<div>
      <span>陪产假</span>
    </div>),
    value: 'PaternityLea',
  },
  {
    label:
    (<div>
      <span>婚假</span>
    </div>),
    value: 'marriageLea',
  },
  {
    label:
    (<div>
      <span>例假</span>
    </div>),
    value: 'PeriodLea',
  },
  {
    label:
    (<div>
      <span>丧假</span>
    </div>),
    value: 'BereavementLea',
  },
  {
    label:
    (<div>
      <span>哺乳假</span>
    </div>),
    value: 'LactationLea',
  },
];




const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
// GMT is not currently observed in the UK. So use UTC now.
const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

// Make sure that in `time` mode, the maxDate and minDate are within one day.
let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);
// console.log(minDate, maxDate);
if (minDate.getDate() !== maxDate.getDate()) {
  // set the minDate to the 0 of maxDate
  minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
}

// function formatDate(date) {
//   /* eslint no-confusing-arrow: 0 */
//   const pad = n => n < 10 ? `0${n}` : n;
//   const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
//   const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
//   return `${dateStr} ${timeStr}`;
// }

// If not using `List.Item` as children
// The `onClick / extra` props need to be processed within the component
// const CustomChildren = ({ extra, onClick, children }) => (
//   <div
//     onClick={onClick}
//     style={{ backgroundColor: '#fff', height: '45px', lineHeight: '45px', padding: '0 15px' }}
//   >
//     {children}
//     <span style={{ float: 'right', color: '#888' }}>{extra}</span>
//   </div>
// );

class Submit extends React.PureComponent {
  state = {
    checked: true,
    files: data,
    multiple: false,
    date:now,
    date1: now,
    time: now,
    utcDate: utcNow,
    dpValue: null,
    customChildValue: null,
    visible: false,
    cols: 1,
    pickerValue: [],
    asyncValue: [],
    visible: false,
    colorValue: ['发起提交'],
    typeValue:[],
    autoFocusInst:'',
    reason:"",
    number:'',
    leaveRecList:[],
    choose:false,
    add:"+",
  };
  onChange = (files, type, index) => {
    console.log("2131231=",files, type, index);
    this.setState({
      files,
    });
  }
  onSegChange = (e) => {
    const index = e.nativeEvent.selectedSegmentIndex;
    this.setState({
      multiple: index === 1,
    });
  }


  onClick = () => {
    setTimeout(() => {
      this.setState({
        data: provinceLite,
      });
    }, 120);
  };

  /* 提交事件 */
  onSubmit = async () =>{
    // console.log("111222=",this.state.autoFocusInst)
    if(!this.state.typeValue){
      alert("请输入请假类型")
    }else if(!this.state.autoFocusInst && !this.state.reason){
      alert("请输入请假时长和请假理由")
    }else{
      // console.log("111=",this.state.typeValue)
      const data = await request.post('/leaveRec',{
        MatterType:this.state.typeValue[0],
        start:this.state.date,
        end:this.state.date1,
        duration:this.state.autoFocusInst,
        reasons:this.state.reason,
        UserID:"xiaoli",
        DepartmentID:"5",
        ProcName:"xiaoli+"+this.state.typeValue[0],
        step:'1',
        CurrentUser:"laowei",
      });
    }
  }

  addApp = ()=>{
    this.props.history.push("/Submit/Select" )
    // console.log(this)
  }
  

  async componentDidMount() {
    const data = await request.get('/leaveRec',{
      UserID:"xiaoli"
    });
    this.state.leaveRecList = data;
    this.setState({
      number:data.length,
    })
  }

  changeKeyword = (val) => {
    this.setState({
      autoFocusInst:val
    })
  }
  fillReason = (val) => {
    this.setState({
      reason:val
    })
  }


  handleClick = () => {
    this.inputRef.focus();
  }
  

    render(){

        // console.log("Submit",this.props)
        const { files,number,add } = this.state;
        const { getFieldProps, getFieldError } = this.props.form;
        ;

        // console.log("this.state.typeValue=",this.state.typeValue)
        // console.log("this.state.date=",this.state.date)
        // console.log("this.state.date1=",this.state.date1)
        // console.log("this.state.timeLong=",this.state.timeLong)

        return(
          <div className="Submit">
            
            {/* 提示信息 */}
            <NoticeBar  icon={null}>这是本月第<span>{number}</span>次提交</NoticeBar>

            {/* 请假内容 */}
            <div>
              <List style={{ backgroundColor: 'white' }} className="picker-list">
                <Picker data={colors} cols={1} {...getFieldProps('district3')} className="forss"
                value={this.state.typeValue}
                onChange={v => {
                  let obj = {
                    typeValue:v
                  }
                  if(v)obj.choose=true
                  else obj.choose=false
                  this.setState(obj);
                  
                }}
                >
                  <List.Item arrow="horizontal">
                    <strong>*</strong>
                    请假类型
                  </List.Item>
                </Picker>
              </List>
              {/* <p><a href="">事假余额</a></p> */}
            </div>

            {/* 请假开始时间 */}
            <List className="date-picker-list" style={{ backgroundColor: 'white' }}>

              <DatePicker
                value={this.state.date} 
                disabled={!this.state.choose}
                
                // onChange={date => console.log("121323=",date)}
                onChange={date => this.setState({ date:date })}
              >
                <List.Item arrow="horizontal">
                <strong>*</strong>
                  开始时间
                </List.Item>
              </DatePicker>
            </List>

             {/* 请假结束时间 */}
            <List className="date-picker-list" style={{ backgroundColor: 'white' }}>
              <DatePicker
                value={this.state.date1}
                disabled={!this.state.choose}
                // onChange={date => console.log("1213233465=",date)}
                onChange={date1 => this.setState({ date1:date1 })}
              >
                <List.Item arrow="horizontal">
                <strong>*</strong>
                  结束时间
                </List.Item>
              </DatePicker>
            </List>
            <List>
            
              <InputItem
                {...getFieldProps('digit')}
                type="digit"
                placeholder="请输入时长"
                // onBlur={date => console.log("121323=",date)}
                value={this.state.autoFocusInst}
                onChange={this.changeKeyword} 
                editable={this.state.choose}
              >
                <strong>*</strong>
                时长</InputItem>
              <p className="InputTips">
                时长将自动计入考勤统计</p>
            </List>

            <div>
              <List>
                <TextareaItem
                  {...getFieldProps('note3')}
                  // title="请假事由"
                  title={<p><strong>*</strong><span>请假事由</span></p>}
                  autoHeight
                  labelNumber={5}
                  editable={this.state.choose}
                />
                <TextareaItem
                  {...getFieldProps('note1')}
                  rows={3}
                  placeholder="请输入请假事由"
                  value={this.state.reason}
                  onChange={this.fillReason} 
                  editable={this.state.choose}
                />
              </List>
            </div>



            {/* 图片上传 */}
            <List>
              <p className="ListTit">图片</p> 

              <WingBlank>
                <SegmentedControl
                  values={['切换到单选', '切换到多选']}
                  selectedIndex={this.state.multiple ? 1 : 0}
                  onChange={this.onSegChange}
                />
                <ImagePicker
                  files={files}
                  onChange={this.onChange}
                  onImageClick={(index, fs) => console.log(index, fs)}
                  selectable={files.length < 7}
                  multiple={this.state.multiple}
                />
              </WingBlank>
            </List>

            {/* 流程 */}
            <List className="process">
              <p className="processTit">流程</p> 
              <Steps current={0}>
                <Step title="审批人"
                // icon={path="add/asrty"}
                description={
                <div>
                  <div href="" className="addApproval" onClick={this.addApp}>{this.state.add}</div>
                </div>}/>
    
                <Step title="抄送人" description={
                <div>
                  <a href="" className="addCC" onClick={this.addCC}>+</a>
                </div>} />
              </Steps>
             
            </List>

            {/* 通过日历 */}
            <List>
              <List.Item
                extra={<Switch
                  checked={this.state.checked}
                  onChange={() => {
                    this.setState({
                      checked: !this.state.checked,
                    });
                  }}
                  color="#108ee9"
                />}
              >通过后同步到我的日历</List.Item>
            </List>

            <List>
              <p className="doubtTit">
                <a href="">有疑问? 找钉小秘</a>
              </p>
            </List>

            <List className="submitButton">
              <Button type="primary" 
              disabled={!this.state.choose}
              onClick={this.onSubmit}>提交</Button>
            </List>
          </div>
        )
    }
}
  Submit = withRouter(Submit)
export default createForm()(Submit);