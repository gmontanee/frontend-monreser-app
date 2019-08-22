import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from './withAuth.js';

class FootNavbar extends Component {
  render() {  
    return (
      <div>
        {this.props.isLoggedIn ? (
          <>
          <Link to='/'>Home</Link>
          <Link to='/profile'>Profile</Link>
        </>
        ) : (
          <>
            <h3>For more information, please contact <strong>info@monreser.com</strong></h3>
          </>
        )}
      </div>
    )
  }
}

export default withAuth(FootNavbar);