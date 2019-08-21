import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from './withAuth.js';

class FootNavbar extends Component {
  render() {  
    return (
      <div>
        {this.props.isLoggedIn ? (
          <>
            <a href="/">Home<img src="/public/casa.png" alt="" width='100'/></a>
            <a href="/private">Profile<img src="/public/usuario.png" alt=""/></a>
          </>
        ) : (
          <>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
          </>
        )}

      </div>
    )
  }
}

export default withAuth(FootNavbar);