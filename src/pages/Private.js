import React, { Component } from 'react'

import withAuth from '../components/withAuth.js';

class Private extends Component {

  componentDidMount(){
    this.props.user.isAdmin && this.props.history.push("/adminHome")
  }
  render() {
    return (
      <div>
        <h1>Welcome {this.props.user.username}</h1>
      </div>
    )
  }
}

export default withAuth(Private); 