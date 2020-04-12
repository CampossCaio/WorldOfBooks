
import styled from 'styled-components';

export const Container = styled.div`
   
   div {
       padding: 30px;
     
       justify-content: center;
       ul {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 50px;
        margin-top: 30px;

        li {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 400px;
            background: #fff;
            border-radius: 4px;
            
           
            
            h1 {
                margin-top: 70px;
            }

            strong {
                margin-top: 150px;
            }

            div  {
                display: flex;
                width: 100%;
                align-items: center;
                justify-content: space-between;
                
                

                button{
                    width: 80px;
                    margin:0;
                    color: #08298A;
                    background: #fff;
                    border 1px solid #08298A;
                    border-radius: 4px;
                }
            }

            

           
        }
       }
   }
`;
