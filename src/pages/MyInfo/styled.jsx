
import styled from "styled-components"


export const Titulo = styled.div`
    background: linear-gradient(-45deg, #459896, #87C43C);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 35px; 
    font-weight: 900;
    text-align: center;
`

export const Seta = styled.div`
    margin-top 10%;
`

export const Meses = styled.div`
    margin-top: 8%;
    margin-left: 2%;
`

export const DateContainer = styled.div`
    margin-top: 1vh;
    margin-bottom: 1vh;
    height: 10vh;
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

export const Tabela = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    padding: 12px;
`

export const Infos = styled.div`
    margin-top: 4%;
`

export const ScrollAbastecimento = styled.div`
    margin-top: 1vh;
    height: 15vh;
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