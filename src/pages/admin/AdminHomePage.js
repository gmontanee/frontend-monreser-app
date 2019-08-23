import React, { Component } from 'react'
import withAuth from '../../components/withAuth';

class AdminHomePage extends Component {

  state = {
    activeContainers: []
  }

  componentDidMount(){
    this.props.getMe()
    .then(() => {
      console.log(this.props.user)
      if (this.props.isLoggedIn) {
        this.setState({ activeContainers: this.props.user.activeContainers })
      } 
    })
  }

  render() {
    // const { user } = this.props;

    const { activeContainers } = this.state;
    return (
      <div>
        <h1>Welcome {this.props.user.username}</h1>
        {activeContainers.map((elem) => {
          return(
            <div key={elem._id}>
              <p><strong>Servei:</strong> {elem.service}</p>
              {elem.filled && <p><strong>Material:</strong> {elem.filled}</p>}
              <p><strong>Residu:</strong> {elem.waste}</p>
              <p><strong>Capacitat:</strong> {elem.capacity}</p>
              <p><strong>Ubicacio:</strong> {elem.ubicacio}</p>
              <p><strong>Data d'entrega:</strong> {elem.dataEntrega}</p>
              {elem.dataRetirada && <p><strong>Data de recollida:</strong> {elem.dataRetirada}</p>}
              <a href={`/admin/accept/${elem._id}`}><button>Accept Request</button></a>
            </div>
          )
        })}
      </div>
    )
  }
}

export default withAuth(AdminHomePage); 