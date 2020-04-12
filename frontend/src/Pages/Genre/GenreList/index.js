import React,{useEffect, useState } from 'react';

import { Container } from './style';
import {useHistory} from 'react-router-dom';
import Header from '../../../components/Header';
import api from '../../../services/api';

export default function GenreList() {
  
  const [genres, setGenres ] = useState([]);

  const history = useHistory();

  async function loadGenres() {
    const response = await api.get('genres');
    setGenres(response.data);
  }

  async function handleDeleteGenre(id) {
    await api.delete(`genres/${id}`);

    setGenres(genres.filter( genre => genre.id !== id));
  }

  useEffect(() => {
    loadGenres();
  },[]);

  return (
    <>
    <Header/>
    <Container>
     <div>
       <button onClick={() => {history.push('/genres')}}>Adicionar</button>
       <ul>
        {
          genres.map( genre => (
            <li key={genre.id}>
              <strong>{genre.name}</strong>
              <div className="buttonContainer">
                <button onClick={() => {alert('Desculpe, essa funcionalidade ainda não foi finalizada.')}}>Editar</button>
                <button onClick={() => {handleDeleteGenre(genre.id)}}>Deletar</button>
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
