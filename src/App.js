import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import AuthProvider from './contexts/auth-context.js';

import 'milligram';
import './App.css'; 

//Components
import Navbar from './components/Navbar.js';
import NavbarFoot from './components/NavbarFoot.js';
import AnonRoute from './components/AnonRoute.js';
import PrivateAdminRoute from './components/PrivateAdminRoute.js';
import PrivateClientRoute from './components/PrivateClientRoute.js';
import PrivateTransporterRoute from './components/PrivateTransporterRoute.js';

import SignupAdminRoute from './components/SignupAdminRoute.js';

// import Signup from './pages/admin/Signup';

//Pages
  //Globals
  import Login from './pages/Login';
  import SignUpContainer from './pages/client/SignUpContainer.js';
  import SignupAdmin from './pages/SignupAdmin.js';
  import NotFound from './pages/NotFound';

  //Client
  import HomePage from './pages/client/HomePage.js';
  import NewContainerPage from './pages/client/NewContainerPage';
  import ContainerDetails from './pages/client/ContainerDetails';
  import EditContainer from './pages/client/EditContainer';
  import RequestCollection from './pages/client/RequestCollection.js';

  //Admin
  import AdminHomePage from './pages/admin/AdminHomePage.js';
  import AcceptContainerPage from './pages/admin/AcceptContainerPage.js';
  import SignupTransporter from './pages/admin/SignupTransporter.js';
  
  //Transporter
  import TransporterHomePage from './pages/transporter/TransporterHomePage.js';
  import UpdateContainer from './pages/transporter/UpdateContainer.js';


class App extends Component {
  render() {
    return (
      <Router>
        <AuthProvider>
          <div className="container">
            <h1>Monreser - App</h1>
            <Navbar />
            <Switch>
              <AnonRoute path="/login" exact component={Login} />
              <AnonRoute path="/signup" exact component={SignUpContainer} />
              <SignupAdminRoute path="/admin/signup192837" exact component={SignupAdmin} />
              
              <PrivateClientRoute path='/' exact component={HomePage} />
              <PrivateClientRoute path='/newContainer' exact component={NewContainerPage} />
              <PrivateClientRoute path='/client/container/:id' exact component={ContainerDetails} />
              <PrivateClientRoute path='/client/container/edit/:id' exact component={EditContainer} />
              <PrivateClientRoute path='/client/container/requestcollection/:id' exact component={RequestCollection} />

              <PrivateAdminRoute path='/adminHome' exact component={AdminHomePage} />
              <PrivateAdminRoute path='/admin/accept/:id' exact component={AcceptContainerPage} />
              <Route path="/admin/signuptransporter192837" exact component={SignupTransporter} />
              
              <PrivateTransporterRoute path="/transporterHome" exact component={TransporterHomePage} />
              <PrivateTransporterRoute path="/transporter/delivered/:id" exact component={UpdateContainer} />

              <Route component={NotFound}/>
            </Switch>
            <NavbarFoot />
          </div>
        </AuthProvider>
      </Router>
    )
  }
}

export default App;