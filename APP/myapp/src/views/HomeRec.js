import React from 'react';
import { withRouter } from 'react-router-dom';
import {  NavBar, Icon  } from 'antd-mobile';




class HomeRec extends React.PureComponent {
 
  render() {
    
    return (
      
      <div className="HomeRec">
      
      <NavBar
          mode="light"
          icon={<Icon type="left" color="#000"/>}
          onLeftClick={() => console.log('onLeftClick')}
          leftContent={[
            <Icon key="0" type="cross" color="#000" style={{ marginRight: '16px' }} />,
          ]}>请假记录
        </NavBar>
      </div>
    );
  }
}

export default HomeRec;



