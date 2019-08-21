import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import AdminHomeRoute from '../../components/Admin/AdminHomeRoute';

import withAuth from '../../components/withAuth.js';

class HomePage extends Component {

  componentDidMount(){
    this.props.user.isAdmin && this.props.history.push("/adminHome")
  }
  
  render() {
    const {isLoggedIn, user} = this.props;
    return (
      <div>
    { isLoggedIn ? (
      <>
        <section>
          <h1>Home</h1>
          <a href="/newContainer"><button>Demana un nou contenidor</button></a>
        </section>
        <section>
          {user.isAdmin ? <AdminHomeRoute path='/adminHome' exact component={AdminHomeRoute} /> :
          user.activeContainers.map((elem) => {
            return (
              <div key={elem._id}>
                <p><strong>Servei:</strong> {elem.service}</p>
                {elem.filled && <p><strong>Material:</strong> {elem.filled}</p>}
                <p><strong>Residu:</strong> {elem.waste}</p>
                <p><strong>Capacitat:</strong> {elem.capacity}</p>
                <p><strong>Ubicacio:</strong> {elem.ubicacio}</p>
                <p><strong>Data d'entrega:</strong> {elem.dataEntrega}</p>
                {elem.dataRetirada && <p><strong>Data de recollida:</strong> {elem.dataRetirada}</p>}
                <a href={`client/container/${elem._id}`}><button>Details</button></a>
              </div>
            )
          })}
        </section>
      </>
    ): (<Redirect to='/login' />)}
    </div>
    )
  }
}

export default withAuth(HomePage);  