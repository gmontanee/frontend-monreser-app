import React, { Component } from 'react'
import withAuth from '../../components/withAuth';

class AdminHomePage extends Component {

  state = {
    activeContainers: []
  }

  componentDidMount(){
    this.props.getMe()
    .then(() => {
        this.setState({ activeContainers: this.props.user.activeContainers })
    })
  }
  
  render() {
    const { user } = this.props;

    const { activeContainers } = this.state;

    return (
      <div>
        <h1>Welcome {user.username}</h1>
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
              { !elem.isDelivered ? <a href={`/transporter/delivered/${elem._id}`}><button>Update to Delivered</button></a> 
                : <a href={`/transporter/delivered/${elem._id}`}><button>Update to Collected</button></a>
              }
            </div> 
          )
        })}
      </div>
    )
  }
}

export default withAuth(AdminHomePage);