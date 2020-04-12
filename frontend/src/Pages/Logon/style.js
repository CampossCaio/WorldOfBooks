import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #f2f2f2;
    display: flex 1;
    align-items: center;
    justify-content: center;
   
   div {

    display: flex;
    height: 80%;
    
    background: #fff;
    border-radius: 10px;
    align-items: center;
    justify-content: center;

    img {
        height: 90%;
        margin-left: 10px;
    }
 
    div {
        display: flex;
        width: 100%;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        margin-right: 120px;
       
        
 
        img {
            height: 150px;
        }
 
        button {
            width: 80%;
            height: 60px;
            background: #08298A;
            border-radius: 8px;
            color: #fff;
            font-weight: 600;
            margin-top: 20px;
            display: inline-block;
            text-align: center;
            text-decoration: none;
            font-size: 18px;
            line-height: 60px;
            transition: filter 0.2s;
        }

        button:hover {
            filter: brightness(80%);
        }
    }
   }
  
`;
