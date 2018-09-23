import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';

class Nav extends Component {
    state = {
      current: 'home'
    }

    handleItemClick = (e) => {
      console.log('click ', e);
      this.setState({ current: e.key });
    }
  
    render() {
     
      return (
        <Menu
          onClick={this.handleItemClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key='home'>
            <Link to='/'><Icon type="home" />Home</Link>
          </Menu.Item>
  
          <Menu.Item key='gods'>
            <Link to='/gods'><Icon type="thunderbolt" />Gods</Link>
          </Menu.Item>
  
          <Menu.Item key='magicItems'>
            <Link to='/magicitems'><Icon type="key" />Magic Items</Link>
          </Menu.Item>

          <Menu.Item key='places'>
            <Link to='/places'><Icon type="appstore" />Places</Link>
          </Menu.Item>

          <Menu.Item key='races'>
            <Link to='/races'><Icon type="team" />Races</Link>
          </Menu.Item>
        </Menu>
      )
    }
}

export default Nav;
