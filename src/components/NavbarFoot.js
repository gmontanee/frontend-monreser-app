import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from './withAuth.js';

class FootNavbar extends Component {
  render() {  
    return (
      <div className="footNavbar">
        {this.props.user.isAdmin ? (
          <ul className='footNavbarUl'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/adminProfile'>Profile</Link></li>
          </ul>
        ) 
        : this.props.user.isTransporter ? (
          <ul className='footNavbarUl'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/transporterProfile'>Profile</Link></li>
          </ul>
        ) 
        : this.props.isLoggedIn ? (
          <ul className='footNavbarUl'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
          </ul>
         ) 
         :
          <>
            <h3>For more information, please contact <strong>info@monreser.com</strong></h3>
          </>
        }
      </div>
    )
  }
}

export default withAuth(FootNavbar);