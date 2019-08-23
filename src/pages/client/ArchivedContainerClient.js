import React, { Component } from 'react'
import withAuth from '../../components/withAuth';

class AdminHomePage extends Component {
  
  render() {
    const container = this.props.user.archivedContainers.find((elem) => {
      return elem._id === this.props.match.params.id;
    });
    return ( 
      <div>
        <h1>Container Details</h1>
        <div key={container._id}>
          <p><strong>Servei:</strong> {container.service}</p>
          {container.filled && <p><strong>Material:</strong> {container.filled}</p>}
          <p><strong>Residu:</strong> {container.waste}</p>
          <p><strong>Capacitat:</strong> {container.capacity}</p>
          <p><strong>Ubicacio:</strong> {container.ubicacio}</p>
          <p><strong>Data d'entrega:</strong> {container.dataEntrega}</p>
          {container.dataRetirada && <p><strong>Data de recollida:</strong> {container.dataRetirada}</p>}
        </div>
      </div>
    )
  }
}

export default withAuth(AdminHomePage); 