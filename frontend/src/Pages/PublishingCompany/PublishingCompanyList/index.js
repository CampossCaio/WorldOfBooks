import React,{useState, useEffect} from 'react';

import { Container } from './style';
import {useHistory} from 'react-router-dom';
import Header from '../../../components/Header';
import api from '../../../services/api';


export default function PublishingCompanyList() {

  const [publishingCompanys, setPublishingCompanys] = useState([]);
  const history = useHistory();


  async function loadPublishingCompanys(){
    const response = await api.get('publishingCompany');
    setPublishingCompanys(response.data);
  }

  async function hadleDeletePublishingCompany(id){
    await api.delete(`publishingCompany/${id}`)

    setPublishingCompanys(publishingCompanys.filter(publishingCompany => publishingCompany.id !== id));
  }

  useEffect(() => {
    loadPublishingCompanys();
  },[]);


  return (
    <>
    <Header/>
    <Container>
     <div>
       <button onClick={() => {history.push('/publishingCompanys')}}>Adicionar</button>
       <ul>
        {
          publishingCompanys.map(publishingCompany => (
            <li key={publishingCompany.id}>
            <strong>{publishingCompany.name}</strong>
             <div className="buttonContainer">
               <button onClick={() => {alert('Desculpe, essa funcionalidade ainda não foi finalizada.')}}>Editar</button>
               <button 
               onClick={() => {hadleDeletePublishingCompany(publishingCompany.id)}}>
                 Deletar
               </button>
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
