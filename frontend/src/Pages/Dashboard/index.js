import React, {useEffect, useState} from 'react';

import { Container } from './style';
import {useHistory, Link } from 'react-router-dom';
import Header from '../../components/Header';
import api from '../../services/api';

export default function Dashboard() {
  
  const [books, setBooks] = useState([]);

  async function loadBooks(){
    const response = await api.get('books');

    setBooks(response.data);
  }

  async function handleDeleteBook(id){
    await api.delete(`books/${id}`);

    setBooks(books.filter(book => book.id !== id));
  }

  useEffect(() => {
    loadBooks();
  }, [])

  const history = useHistory();
  return (
    <>
    <Header/>
    <Container>
     <div>
       <ul>
         {
           books.map(book => (
            <li key={book.id}>
              <h1>{book.title}</h1>
                <strong>{book.author.name}</strong>
                <p>{book.publishing_company.name}</p>
                <p>{book.release_year}</p>
              <div className="buttonContainer">
                {
                  /*
                   //Passando o objeto book para outro componente através das rotas
                   <Link to={{ pathname: 'books', state: { book } }} >
                   <button>Editar</button>
                   </Link>
                   */
                }
                <button onClick={() => {alert('Desculpe, essa funcionalidade ainda não foi finalizada.')}}>Editar</button>
                <button onClick={() => {handleDeleteBook(book.id)}}>Deletar</button>
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
