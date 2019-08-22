import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import withAuth from './withAuth';

const ClientPrivateRoute = (props) => {
  const {isLoggedIn, component: Component, ...rest} = props;
  return (
    <>
      {!isLoggedIn ?  <Redirect to='/login' /> 
        : props.user.isAdmin ? <Redirect to='/adminHome' />
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

export default withAuth(ClientPrivateRoute);