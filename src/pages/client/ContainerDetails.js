import React, { Component } from 'react'

import withAuth from '../../components/withAuth';
import ContainerService from '../../services/container-service'

class AdminHomePage extends Component {

  componentDidMount(){
    this.props.user.isAdmin && this.props.history.push("/")
  }
  render() {
    const { user } = this.props;
    const container = user.activeContainers.find((elem) => {
      return elem._id === this.props.match.params.id;
    });
    console.log('container', container);
    const trans1 = (containerId) => {
      ContainerService.deleteContainer(containerId);
      this.props.history.push("/");
    }
    return (
      <div>
        <h1>Welcome ertyui</h1>
        <div key={container._id}>
          <p><strong>Servei:</strong> {container.service}</p>
          {container.filled && <p><strong>Material:</strong> {container.filled}</p>}
          <p><strong>Residu:</strong> {container.waste}</p>
          <p><strong>Capacitat:</strong> {container.capacity}</p>
          <p><strong>Ubicacio:</strong> {container.ubicacio}</p>
          <p><strong>Data d'entrega:</strong> {container.dataEntrega}</p>
          {container.dataRetirada && <p><strong>Data de recollida:</strong> {container.dataRetirada}</p>}
          <a href={`/client/container/edit/${container._id}`}><button>Edita</button></a>
          <button onClick={() => trans1(container._id)}>Eliminar</button>
        </div>
      </div>
    )
  }
}

export default withAuth(AdminHomePage); 
  