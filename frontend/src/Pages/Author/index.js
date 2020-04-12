import  React ,{useState, useEffect} from 'react';
import { Container } from './style';
import Header from '../../components/Header';
import api from '../../services/api';
import {useHistory} from 'react-router-dom';

export default function Author(){
  const history =  useHistory();
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [sex, setSex] = useState('');
  const [nacionalidade, setNacionalidade] = useState('');

    async function handleSubmit(e){
        e.preventDefault();

        const data = {
          name,
          birthDate,
          sex,
          nacionalidade
        }

        await api.post('authors', data);
        history.push('author/list');
    }
    
    return(
        <>
        <Header/>
        <Container>
          <form onSubmit={handleSubmit}>
              <h1>Autor</h1>
              <div>
                  <input 
                    type="text" 
                    placeholder="Nome do Autor"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                  <input 
                    type="text" 
                    placeholder="Data de Nascimento"
                    value={birthDate}
                    onChange={e => setBirthDate(e.target.value)}
                  />
              </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Sexo"
                    value={sex}
                    onChange={e => setSex(e.target.value)}
                  />
                  <input
                   type="text" 
                   placeholder="Nacionalidade"
                   value={nacionalidade}
                   onChange={e => setNacionalidade(e.target.value)}
                  /> 
              </div>
              <div>
                  <button type="button" onClick={() => {alert('Desculpe, essa funcionalidade ainda não foi concluída.')}}>Atualizar</button>
                  <button type="submit">Cadastrar</button>
              </div>
          </form>
        </Container>
        </>
    )
}