
import styled from "styled-components"


export const Fundo = styled.div`
    background: linear-gradient(-45deg, #459896, #87C43C);
    background-repeat: no-repeat;
    border-radius: 30px 30px 30px 30px;
    position:fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    bottom: 0;
    width: 100vw;
    height: 8vh;
    padding-left: 2vh;
    padding-right: 2vh;
`
export const IconSize = styled.img`
    width: 3.5vh;
    height: 3.5;
    margin-top: 1vh;
    background-color: transparent;
    transition: background-color 0.3 ease;
    &:hover {
      background: rgba(255, 255, 255, 0.3); 
      border-radius: 50%;
      transform: scale(1.1)
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  margin-top: 5%;
  margin-bottom: 5%;
`

