import React, { Component } from 'react';
import './App.css';
import { FormularioCadastro } from './components/FormularioCadastro/FormularioCadastro';
import {Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';
import {validarCPF, validarSenha} from './models/Cadastro';
import ValidacoesCadastro from './contexts/ValidacoesCadastro';

export class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
        <ValidacoesCadastro.Provider value={{cpf:validarCPF, senha:validarSenha}}>
          <FormularioCadastro aoEnviar={aoEnviar} />
        </ValidacoesCadastro.Provider>
        
      </Container>
    );
  }
}

function aoEnviar(dados){
  console.log(dados);
}

export default App;
