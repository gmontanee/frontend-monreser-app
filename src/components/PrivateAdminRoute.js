import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import withAuth from './withAuth';

const AdminPrivateRoute = (props) => {
  const {isLoggedIn, component: Component, ...rest} = props;
  return (
    <>
      <h1>qwertyui</h1>
      {!isLoggedIn ?  <Redirect to='/login' /> 
        : !props.user.isAdmin ? <Redirect to='/' />
        : props.user.isTransporter ? <Redirect to='/transporterHome' />
        : <Route 
          render={(props) => {
            return <Component {...props}/>
          }}
          {...rest}
      /> 
      }
    </>
  );
}

export default withAuth(AdminPrivateRoute); 