import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import withAuth from '../withAuth';

const HomeRoute = (props) => {
  const {isLoggedIn, component: Component, ...rest} = props;
  return (
    <>
      {isLoggedIn ?  <Route 
        render={(props) => {
          return <Component {...props}/>
        }}
        {...rest}
      /> : <Redirect to='/login' />}
    </>

   
  );
}

export default withAuth(HomeRoute);
