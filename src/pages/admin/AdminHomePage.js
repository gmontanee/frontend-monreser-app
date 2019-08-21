import React, { Component } from 'react'

import withAuth from '../../components/withAuth';

class AdminHomePage extends Component {

  componentDidMount(){
    this.props.user.isAdmin && this.props.history.push("/adminHome")
  }
  render() {
    const { user } = this.props;
    return (
      <div>
        <h1>Welcome ertyui {this.props.user.username}</h1>
        {user.activeContainers.map((elem) => {
          return(
            <div key={elem._id}>
              {elem.capacity}
            </div>
          )
        })}
      </div>
    )
  }
}

export default withAuth(AdminHomePage); 