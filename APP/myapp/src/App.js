import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withRouter } from 'react-router-dom';
import { Grid } from 'antd-mobile';
// import 'antd-mobile/dist/antd-mobile.css';

const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}));

 @withRouter
class App extends React.Component {
  state = {
    num: 10
  }
  changeNumber = () => {
    this.setState({
      num: this.state.num + 1
    })
  }
  render() {
    console.log('App.props',this.props)
    return (
      <div>
      {/* <div className="App">
          Hello Test {this.state.num}

          <button onClick={this.changeNumber}>change Number</button>
        </div> */
      }
        <div className="sub-title">这里是logo</div>
        <Grid data={data} activeStyle={false} />
      </div>
    );
  }

}

export default App;
