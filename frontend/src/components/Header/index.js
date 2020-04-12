import React from 'react';

import { Container } from './style';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo2.png'

export default function Header(){
  
    return(
        <Container>
            <header>
                <img src={logo} alt="logo"/>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/books">Livro</Link>
                <Link to="/author/list">Autor</Link>
                <Link to="/publishingCompanys/list">Editora</Link>
                <Link to="/genres/list">Gênero</Link>
            </header>
        </Container>
    )
}