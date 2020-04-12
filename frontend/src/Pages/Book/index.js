import  React ,{useState, useEffect} from 'react';
import { Container } from './style';
import Header from '../../components/Header';
import api from '../../services/api';
import {useHistory} from 'react-router-dom';



export default function Book(){
    
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [release_year, setRelease_year] = useState();
    const [author, setAuthor] = useState();
    const [publishingCompany, setPublishingCompany] = useState();
    const [genre, setGenre] = useState();


    const [authors, setAuthors] = useState([]);
    const [publishingCompanys, setPublishingCompanys] = useState([]);
    const [genres, setGenres] = useState([]);
   
    
     async function handleSubmit(e){
        e.preventDefault();

        const data = {
          title,
          release_year,
          author_id: author,
          publishing_company_id: publishingCompany ,
          genres_id: genre
        }

        console.log(data);

        await api.post('books', data);
       history.push('dashboard');
    }

    async function loadAthors(){
      const response = await api.get('authors');
      setAuthors(response.data);
    }

    async function loadGenres(){
      const response = await api.get('genres');
      setGenres(response.data);
    }

    async function loadPublishingCompany(){
      const response = await api.get('publishingCompany');
      setPublishingCompanys(response.data);
    }

    useEffect(() => {
      loadAthors();
      loadGenres();
      loadPublishingCompany();
    },[]);
    
    return(
        <>
        <Header/>
        <Container>
          <form onSubmit={handleSubmit}>
              <h1>Livro</h1>
              <div>
                  <input 
                    type="text" 
                    placeholder="Nome do livro"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                  />
                  <input 
                    type="text" 
                    placeholder="Ano"
                    value={release_year}
                    onChange={e => setRelease_year(e.target.value)}
                  />
              </div>

                <select 
                  value={author}
                  onChange={e => setAuthor(e.target.value)}
                >
                   <option>SELECIONE O AUTOR</option>
                   {
                     authors.map(author => (
                     <option 
                        key={author.id} 
                        value={author.id}
                        
                        >
                          {author.name}
                      </option>
                     ))
                   }
                </select>
      
             
                <div>

                    <select 
                      value={genre}
                      onChange={e => setGenre(e.target.value)}
                    >
                      <option>SELECIONE O GÊNERO</option>
                          {
                            genres.map(genre => (
                            <option 
                                key={genre.id} 
                                value={genre.id}
                                
                                >
                                  {genre.name}
                              </option>
                            ))
                          }
                    </select>

                    <select 
                      value={publishingCompany}
                      onChange={e => setPublishingCompany(e.target.value)}
                      >
                   <option>SELECIONE A EDITORA</option>
                      {
                        publishingCompanys.map(publishingCompany => (
                        <option 
                            key={publishingCompany.id} 
                            value={publishingCompany.id}
                            
                            >
                              {publishingCompany.name}
                          </option>
                        ))
                      }

                </select>
              </div>
              <div>
                  <button onClick={() => {alert('Desculpe, essa funcionalidade ainda não foi finalizada.')}}>Atualizar</button>
                  <button type="submit">Cadastrar</button>
              </div>
          </form>
        </Container>
        </>
    )
}