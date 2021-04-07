import React, { Component } from 'react';
import './App.css';
import { FormRegister } from './components/FormRegister/FormRegister';
import {Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';
import {validateDocument, validatePassword} from './models/Register';
import RegisterValidations from './contexts/RegisterValidations';

export class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Formulário de Registro</Typography>
        <RegisterValidations.Provider value={{document:validateDocument, password:validatePassword}}>
          <FormRegister whenSending={whenSending} />
        </RegisterValidations.Provider>
        
      </Container>
    );
  }
}

function whenSending(data){
  console.log(data);
}

export default App;
