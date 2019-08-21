import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar.js';
import FootNavbar from './components/FootNavbar.js';
import AnonRoute from './components/AnonRoute.js';
import PrivateRoute from './components/PrivateRoute.js';
import HomeRoute from './components/Client/HomeRoute.js';
import NewContainerRoute from './components/Client/NewContainerRoute.js';
import SignupTransporterRoute from './components/Admin/SignupTransporterRoute.js';

import SignupAdminRoute from './components/SignupAdminRoute.js';
import AdminHomeRoute from './components/Admin/AdminHomeRoute.js';

import Private from './pages/Private';
// import Signup from './pages/admin/Signup';
import SignupAdmin from './pages/SignupAdmin.js';
import HomePage from './pages/client/HomePage.js';
import AdminHomePage from './pages/admin/AdminHomePage.js';
import AcceptContainerPage from './pages/admin/AcceptContainerPage.js';
import SignUpContainer from './pages/client/SignUpContainer.js';
import ContainerDetails from './pages/client/ContainerDetails';
import EditContainer from './pages/client/EditContainer';
import SignupTransporter from './pages/admin/SignupTransporter.js';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

import AuthProvider from './contexts/auth-context.js';

import './App.css'; 
import 'milligram';


class App extends Component {
  render() {
    return (
      <Router>
        <AuthProvider>
          <div className="container">
            <h1>Basic React Authentication</h1>
            <Navbar />
            <Switch>
              <AnonRoute path="/login" exact component={Login} />
              <PrivateRoute path="/private" exact component={Private} />
              
              <AnonRoute path="/signup" exact component={SignUpContainer} />
              <HomeRoute path='/' exact component={HomePage} />
              <NewContainerRoute path='/newContainer' exact component={NewContainerRoute} />
              <PrivateRoute path='/client/container/:id' exact component={ContainerDetails} />
              <PrivateRoute path='/client/container/edit/:id' exact component={EditContainer} />

              <SignupAdminRoute path="/admin/signup192837" exact component={SignupAdmin} />
              <SignupTransporterRoute path="/admin/signuptransporter192837" exact component={SignupTransporter} />
              <AdminHomeRoute path='/adminHome' exact component={AdminHomePage} />
              <PrivateRoute path='/admin/accept/:id' exact component={AcceptContainerPage} />
              
              <Route component={NotFound}/>
            </Switch>
            <FootNavbar />
          </div>
        </AuthProvider>
      </Router>
    )
  }
}

export default App;