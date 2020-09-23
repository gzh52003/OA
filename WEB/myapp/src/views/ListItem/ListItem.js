import React from 'react'
import { Table, Button,Input,Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;
let IsTodo = true;
//表头
const columns = [
    {
        title: '#',
        dataIndex: 'key',
    },
    {
      title: '事项名称',
      dataIndex: 'title',
      render: text => <a>{text}</a>,
    },
    {
      title: '发起人',
      dataIndex: 'username',
    },
    {
        title: '当前审批人',
        dataIndex: 'currentUsername',
    },
    {
      title: '发起部门',
      dataIndex: 'dept',
    },
    {
        title: '发起时间',
        dataIndex: 'createDate',
    },
    {
        title: '操作',
        render: (text, record) => (
            <Space size="middle">
                {IsTodo?<a>审批 {record.ProcID}</a>:<a>撤回 {record.ProcID}</a>}
                <a>查看</a>
            </Space>
        ),
    }
  ];
  //表数据-key值需要对应
  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
        key: i+1,
        title: `外出调研（全国养猪场经营情况）-2020年9月10日至2021年12月 - ${i}`,
        username: `老李 - ${i}`,
        currentUsername:`小李 - ${i}`,
        dept: `策划部 - ${i}`,
        createDate:'2020-09-10',
        ProcID:i+1
    });
  }
  
  class ListItem extends React.Component {
      constructor(props){
        super(props);
      }
       
    state = {
      selectedRowKeys: [], // Check here to configure the default column
      loading: false
    };

    start = () => {
      this.setState({ loading: true });
      // 发起请求拿去数据
      setTimeout(() => {
        this.setState({
          selectedRowKeys: [],
          loading: true,
        });
      }, 1000);
    };
  
    onSelectChange = selectedRowKeys => {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      this.setState({ selectedRowKeys });
    };
  
    render() {
        
        IsTodo = this.props.IsTodo
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
                <div style={{ marginBottom: 16,width: '600px' }}>
                <Search
                    placeholder="请输入事项名称"
                    enterButton="查询"
                    size="large"
                    onSearch={value => console.log("点击查询按钮",value)}
                />
                </div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={
                    {
                        hideOnSinglePage:true,
                        total:46,
                        onChange:(page, pageSize)=>{
                            console.log('当前页：',page," 显示几页：",pageSize);
                        }
                    }
                } />
            </div>
        );
    }
  }
  export default ListItem