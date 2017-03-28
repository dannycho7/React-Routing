import React from 'react';
import { NavLink } from 'react-router-dom';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <NavLink exact activeClassName='active' to='/' >Home</NavLink>
        <NavLink exact activeClassName='active' to='/about' >About</NavLink>
        <NavLink exact activeClassName='active' to='/contact' >Contact</NavLink>
      </div>
    );
  }
}

export default Layout;
