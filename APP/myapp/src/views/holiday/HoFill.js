import React,{Suspense, lazy } from 'react';
import { Picker, List, WhiteSpace,Tabs, Badge,NavBar ,Icon ,NoticeBar,Popover} from 'antd-mobile';
import { createForm, formShape } from 'rc-form';
import arrayTreeFilter from 'array-tree-filter';
import { district, provinceLite } from 'antd-mobile-demo-data';
import Submit from './submit/Submit'
import ViewData from './submit/ViewData'

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

const Item = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
const tabs = [
  { title: <Badge>发起提交</Badge> },
  { title: <Badge>查看数据</Badge> },
];
class HoFill extends React.PureComponent {
  state = {
    visible: false,
    selected: '',
    data: [],
    cols: 1,
    pickerValue: [],
    asyncValue: [],
    sValue: ['2013', '春'],
    colorValue: ['#00FF00'],
  };
  onSelect = (opt) => {
    // console.log(opt.props.value);
    this.setState({
      visible: false,
      selected: opt.props.value,
    });
  };
  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };
  onClick = () => {
    setTimeout(() => {
      this.setState({
        data: provinceLite,
      });
    }, 120);
  };
  

    render(){
        console.log("HoFill",this.props)
        const { getFieldProps, getFieldError } = this.props.form;
        return(
          <div className="HoFill">
            {/* 导航栏 */}
            <NavBar
              mode="light"
              icon={<Icon type="left" color="#000" />}
              onLeftClick={() => {this.props.history.goBack()}}
              rightContent={
                <Popover mask
                  overlayClassName="fortest"
                  overlayStyle={{ color: 'currentColor' }}
                  visible={this.state.visible}
                  overlay={[
                    (<Item key="4" value="send" data-seed="logId">转发给同事</Item>),
                    (<Item key="5" value="write" style={{ whiteSpace: 'nowrap' }}>稍后填写</Item>),
                    (<Item key="6" value="checkRec">
                      <span style={{ marginRight: 5 }}>查看记录</span>
                    </Item>),
                      (<Item key="7" value="QRCode">
                      <span style={{ marginRight: 5 }}>二维码</span>
                    </Item>),
                      (<Item key="8" value="myVoca">
                      <span style={{ marginRight: 5 }}>我的假期</span>
                    </Item>),
                  ]}
                  align={{
                    overflow: { adjustY: 0, adjustX: 0 },
                    offset: [-10, 0],
                  }}
                  onVisibleChange={this.handleVisibleChange}
                  onSelect={this.onSelect}
                >
                  <div style={{
                    height: '100%',
                    padding: '0 15px',
                    marginRight: '-15px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  >
                    <Icon type="ellipsis" color="#000" />
                  </div>
                </Popover>
              }
              leftContent={[
                <Icon key="0" type="cross" color="#000" style={{ marginRight: '16px' }} />,
             ]}
            >
              请假
            </NavBar>

            {/* Tabs */}
            <div>
                <Tabs tabs={tabs}
                  initialPage={0}
                  onChange={(tab, index) => { console.log('onChange', index, tab); }}
                  onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                  <div style={{ display: 'flex'}}>
                      <Submit />
                  </div>
                  <div style={{ display: 'flex'}}>
                      <ViewData />
                  </div>
                  
                </Tabs>

              </div>
          </div>
        )
    }
}

export default createForm()(HoFill);