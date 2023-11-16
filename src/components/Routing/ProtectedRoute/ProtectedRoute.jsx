import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginPage from '../../Log-Register/LoginPage/LoginPage';

function ProtectedRoute({ component, children, ...props }) {
  const user = useSelector((store) => store.user);

  const ProtectedComponent = component || (() => children);

  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
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
