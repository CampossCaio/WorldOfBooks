import  React ,{useState} from 'react';
import { Container } from './style';
import Header from '../../components/Header';
import api from '../../services/api';
import {useHistory} from 'react-router-dom';

export default function PublishingCompany(){

    const history = useHistory();

    const [name, setName ] = useState('');
    async function handleSubmit(e){
        e.preventDefault();

        const data ={ 
            name,
        }

        await api.post('publishingCompany', data);
        history.push('publishingCompanys/list');
    }
    
    return(
        <>
        <Header/>
        <Container>
          <form onSubmit={handleSubmit}>
              <h1>Editora</h1>
              <div>
                  <input 
                    type="text" 
                    placeholder="Nome da Editora"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
              </div>
              <div>
                  <button type="submit">Atualizar</button>
                  <button type="submit">Cadastrar</button>
              </div>
          </form>
        </Container>
        </>
    )
}