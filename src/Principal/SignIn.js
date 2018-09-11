import React from 'react';
import Logo from './Logo';

const styles = {
  container: {
    width: '100%',
    margin: '0 auto',
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#3F51B5',
    borderRadius: '5px',
    color: '#FFF',
    fontSize: '12px'
  }
}

const SignIn = (props) => {
  return (
    <div style = {styles.container}>
      <Logo photo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png"/>
      <h1>Bienvenid@</h1>
      <p>Acá encontrarás las mejores fotos de gatos</p>
      <p>Solo para cat lovers</p>
      <button style = {styles.button}>Sign In</button>
    </div>

  )
}

export default SignIn;
