import React from 'react';
import { TabBar,List, InputItem, WhiteSpace } from 'antd-mobile';
import {
  ProfileOutlined,
  FieldTimeOutlined,
} from '@ant-design/icons';

import { createForm } from 'rc-form';


// @withRouter


  
   
class Test extends React.PureComponent {

  componentWillMount() {
    this.requiredDecorator = this.props.form.getFieldDecorator('required', {
      rules: [{required: true}],
    });
  }

  submit = () => {
    this.props.form.validateFields((error, value) => {
      console.log(error, value);
    });
  }
  state = {
   
  };

  componentDidMount() {
    // this.autoFocusInst.focus();
  }
  handleClick = () => {
    this.inputRef.focus();
  }



  render() {
    let errors;
    const { getFieldError } = this.props.form;
    // const { getFieldProps } = this.props.form;
    return (
      <div className="Ceshi">
         <div>
        {this.requiredDecorator(
          <input
            onChange={
              // can still write your own onChange
            }
          />
        )}
        {(errors = getFieldError('required')) ? errors.join(',') : null}
        <button onClick={this.submit}>submit</button>
      </div>
      </div>
    );
  }
  
  
  
  
}

export default Test;
