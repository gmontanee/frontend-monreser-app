import React, { Component } from 'react'
import withAuth from '../../components/withAuth';

class AdminHomePage extends Component {

  state = {
    archivedContainers: []
  }

  componentDidMount(){
    this.props.getMe()
    .then(() => {
      if (this.props.isLoggedIn) {
        this.setState({ archivedContainers: this.props.user.archivedContainers })
      } 
    })
  }

  render() {
    const { archivedContainers } = this.state;
    return (
      <div>
        <h1>{this.props.user.username} Profile</h1>
        {archivedContainers.map((elem) => {
          return(
            <div key={elem._id}>
              <p><strong>Servei:</strong> {elem.service}</p>
              {elem.filled && <p><strong>Material:</strong> {elem.filled}</p>}
              <p><strong>Residu:</strong> {elem.waste}</p>
              <p><strong>Capacitat:</strong> {elem.capacity}</p>
              <p><strong>Ubicacio:</strong> {elem.ubicacio}</p>
              <p><strong>Data d'entrega:</strong> {elem.dataEntrega}</p>
              {elem.dataRetirada && <p><strong>Data de recollida:</strong> {elem.dataRetirada}</p>}
              <a href={`/transporter/containerArchivedDetails/${elem._id}`}><button>Details</button></a>
            </div>
          )
        })}
      </div>
    )
  }
}

export default withAuth(AdminHomePage); 
