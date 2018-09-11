import React from 'react';
import SignIn from './SignIn';
import SignOut from './SignOut';
import './style.css';


const Principal = (props) => {
  const isLoggedIn = props.isLoggedIn;

  return (
    isLoggedIn ? <SignIn /> : <SignOut />
  );
}

export default Principal;
