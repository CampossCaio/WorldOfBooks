import React, {useEffect, useState} from 'react';

import { Container } from './style';
import {useHistory} from 'react-router-dom';
import Header from '../../../components/Header';
import api from '../../../services/api';

export default function AuthorList() {

  const [authors, setAuthors] = useState([]);

  const history = useHistory();
  
  async function loadAuthors(){
    const response = await api.get('authors');

    setAuthors(response.data);
  }

  async function handleDelete(id) {
    await api.delete(`authors/${id}`);
    setAuthors(authors.filter(author => author.id !== id));
  }

  useEffect(() => {
    loadAuthors();
  },[]);

 

  

  return (
    <>
    <Header/>
    <Container>
     <div>
     <button onClick={() => {history.push('/author')}}>Adicionar</button>
       <ul>
          {
            authors.map(author => (
              <li key={author.id}>
                <img src="https://api.adorable.io/avatars/285/abott@adorable.png" alt="adorable"/>
                <strong>{author.name}</strong>
                <div className="buttonContainer">
                  <button onClick={() => {alert('Desculpe, essa funcionalidade ainda não foi finalizada.')}}>Editar</button>
                  <button onClick={() => {handleDelete(author.id)}}>Deletar</button>
                </div>
            </li>
            ))
          }
       </ul>
     </div>
    </Container>
    </>
  );
}
