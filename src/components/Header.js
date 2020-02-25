import React from 'react';
import logo from '../logo.svg';

class Header extends React.Component {
    render() {
      return (
        <header>
          <img src={logo} className="App-logo" alt="logo react"/>
          <h1>{this.props.title}</h1>
          <p>THIS IS A HEADER {this.props.num}</p>
        </header>
      );
    }
  };

  export default Header;