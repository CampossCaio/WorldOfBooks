
import styled from 'styled-components';

export const Container = styled.div`
   
   div {
       padding: 30px;
     
       justify-content: center;

       button {
        height: 30px;
        width: 100px;
        background: #08298A;
        color: #fff;
        border-radius: 4px;
        border: 0;
        margin-right: 0px;

        &:hover {
            opacity: 0.8;
        }
        }
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
            border-radius: 6px;
            justify-content: space-between;
            
           
            

            strong {
                margin-top: 50px;
                font-size: 20px;
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
