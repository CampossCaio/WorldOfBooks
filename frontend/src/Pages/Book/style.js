import styled from 'styled-components';
import Select from 'react-select';
export const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 90vh;

   form {
       padding: 20px;
       align-items:center;
       justify-content: center;
       display: flex;
       flex-direction: column;
       max-width: 800px;
       width: 100%;
       height: 400px;
       background: #fff;
       border-radius: 10px;

       h1 {
           
           color: #08298A;
           font-weight: bold;
       }

       div {
           width: 100%;
           display: flex;
           justify-content: space-between;
            
           
           input {
                width: 370px;
                height: 40px;
                margin-top: 20px;
                margin-bottom: 10px;
                border-radius: 4px;
                border: 1px solid  #08298A ;
                padding: 10px;   
           }
           select {
               width: 370px;
               height: 40px;
               margin-top: 20px;
               border-radius: 4px;
               border: 1px solid  #08298A ;
               padding: 10px;   
           }
       }

       select {
           width: 100%;
           height: 40px;
           margin-top: 20px;
           border-radius: 4px;
           border: 1px solid  #08298A ;
           padding: 10px;
           
       }

       div {
           margin-top: 10px;

           button {
              height: 40px;
              width: 370px;
              background: #08298A;
              color: #FFF;
              border: 0;
              margin: 0;
              border-radius: 4px;

              &:hover {
                opacity: 0.8;
              }
           }
       }
   }
`;

