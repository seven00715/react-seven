import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import { TabBar } from 'antd-mobile';

export default class Home extends Component {
  state = {
    selectedTab: 'redTab',
    hidden: false, // 不隐藏
    fullScreen: false,
  }
  // renderContent(pageText) {
  //   return (
  //     <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
  //       <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
  //       <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
  //         onClick={(e) => {
  //           e.preventDefault();
  //           this.setState({
  //             hidden: !this.state.hidden,
  //           });
  //         }}
  //       >
  //         Click to show/hide tab-bar
  //         </a>
  //       <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
  //         onClick={(e) => {
  //           e.preventDefault();
  //           this.setState({
  //             fullScreen: !this.state.fullScreen,
  //           });
  //         }}
  //       >
  //         Click to switch fullscreen
  //         </a>
  //     </div>
  //   );
  // }
  render() {
    return (
      // <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
      <div className="home">
        我是home组件
        {/* <Route path="/home/new" component={News}/> */}
          <TabBar
          unselectedTintColor="#949494" // 未选中的颜色
          tintColor="#21b976" //选中的颜色
          barTintColor="white" //整个tab栏的背景色
          hidden={this.state.hidden} //显示或隐藏
          noRenderContent={true}
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<i className="iconfont icon-ind"></i>}
            selectedIcon={ <i className="iconfont icon-ind"></i>
            }
            selected={this.state.selectedTab === 'blueTab'}
            badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            {/* {this.renderContent('Life')} */}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <i className="iconfont icon-findHouse"></i>
            }
            selectedIcon={
              <i className="iconfont icon-findHouse"></i>
            }
            title="找房"
            key="Koubei"
            badge={'new'}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            {/* {this.renderContent('Koubei')} */}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <i className="iconfont icon-infom"></i>
            }
            selectedIcon={
              <i className="iconfont icon-infom"></i>
            }
            title="咨询"
            key="Friend"
            dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            {/* {this.renderContent('Friend')} */}
          </TabBar.Item>
          <TabBar.Item
            icon={ <i className="iconfont icon-my"></i>}
            selectedIcon={ <i className="iconfont icon-my"></i>}
            title="My"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            {/* {this.renderContent('My')} */}
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            {/* {this.renderContent('My')} */}
          </TabBar.Item>
        </TabBar>
      {/* // </div> */}
      </div>
    );

  }
}



