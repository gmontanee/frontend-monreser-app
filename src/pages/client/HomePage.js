import React, { Component } from 'react'
import withAuth from '../../components/withAuth.js';

class HomePage extends Component {

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
    // const { user } = this.props;

    const { activeContainers } = this.state;

    return (
      <div>
        <section>
          <h1>Home</h1>
          <a href="/newContainer"><button>Demana un nou contenidor</button></a>
        </section>
        <section>
          {activeContainers.map((elem) => {
            return (
              <div key={elem._id}>
                <p><strong>Servei:</strong> {elem.service}</p>
                {elem.filled && <p><strong>Material:</strong> {elem.filled}</p>}
                <p><strong>Residu:</strong> {elem.waste}</p>
                <p><strong>Capacitat:</strong> {elem.capacity}</p>
                <p><strong>Ubicacio:</strong> {elem.ubicacio}</p>
                <p><strong>Data d'entrega:</strong> {elem.dataEntrega}</p>
                {elem.dataRetirada && <p><strong>Data de recollida:</strong> {elem.dataRetirada}</p>}
                { elem.isDelivered ? <a href={`client/container/requestcollection/${elem._id}`}><button>Request Collection</button></a> 
                : <a href={`client/container/${elem._id}`}><button>Details</button></a>
                }
              </div>
            )
          })}
        </section>
    </div>
    )
  }
}

export default withAuth(HomePage);  