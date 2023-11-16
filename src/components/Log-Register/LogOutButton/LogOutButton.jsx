import React from 'react';
import { useDispatch } from 'react-redux';

function LogOutButton({ className }) {
  const dispatch = useDispatch();
  return (
    <button
      className={className}
      onClick={() => dispatch({ type: 'LOGOUT' })}
      type="button"
    >
      Log Out
    </button>
  );
}

export default LogOutButton;
