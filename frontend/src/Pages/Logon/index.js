
import React from 'react';
import layout from '../../assets/layout.jpg';
import logo from '../../assets/logo.png';
import { Container } from './style';
import {useHistory} from 'react-router-dom';

export default function Logon() {

  const history = useHistory();

  return (
    <Container>
      <div>
        <img src={layout} alt="layout"/>
        <div>
          <img src={logo} alt="World fo Books"/>
          <button type="button" onClick={() => {history.push('/dashboard')}} >ENTRAR</button>
        </div>
      </div>
    </Container>
  );
}
