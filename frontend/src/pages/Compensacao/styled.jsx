import styled from "styled-components"

export const Titulo = styled.div`
    margin-top: 8%;
    text-align: center;
    margin-bottom: 8%;
    background: linear-gradient(-45deg, #459896, #87C43C);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 22px; 
    font-weight: 800;
`

export const InfoContainer = styled.div`
    margin-top: 1vh;
    margin-bottom: 1vh;
    height: 70vh;
    overflow: auto;
    
    &::-webkit-scrollbar-track {
      background-color: #0000;
    }

    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
      border-radius: 20px;
      background-color: #D0D4CE;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center; 
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 20px;
      background-color: #71806B;
    }
`