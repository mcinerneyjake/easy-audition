import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import LoginPage from '../../Log-Register/LoginPage/LoginPage';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ component, children, ...props }) => {
  const user = useSelector((store) => store.user);

  const ProtectedComponent = component || (() => children);

  return (
    <Route
      {...props}
    >
      {user.id ? (
        <ProtectedComponent />
      ) : (
        <LoginPage />
      )}
    </Route>
  );
}

export default ProtectedRoute;
