import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class Nav extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <Menu>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
            <Link to='/'>Home</Link>
          </Menu.Item>
  
          <Menu.Item 
            name='gods' 
            active={activeItem === 'gods'} 
            onClick={this.handleItemClick}
          >
            <Link to='/gods'>Gods</Link>
          </Menu.Item>
  
          <Menu.Item
            name='magicItems'
            active={activeItem === 'magicItems'}
            onClick={this.handleItemClick}
          >
            <Link to='/magicitems'>Magic Items</Link>
          </Menu.Item>

          <Menu.Item
            name='places'
            active={activeItem === 'places'}
            onClick={this.handleItemClick}
          >
            <Link to='/places'>Places</Link>
          </Menu.Item>

          <Menu.Item
            name='races'
            active={activeItem === 'races'}
            onClick={this.handleItemClick}
          >
            <Link to='/races'>Races</Link>
          </Menu.Item>
        </Menu>
      )
    }
}

export default Nav;
