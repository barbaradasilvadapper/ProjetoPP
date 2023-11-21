import styled from "styled-components"

export const MenuStyle = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: right;
`



export const OptionList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-items: right;
  justify-content: center;
`

export const Option = styled.label`
  display: flex;
  align-items: right;
  margin-bottom: 5%;
  margin-top: 5%;
  padding: 13px;
  cursor: pointer;
  input[type="radio"] {
    align-item: center;
    margin-right: 10px;
    &:checked {
        color: #0000;
      }
  }
`

export const SubmitButton = styled.button`

    padding: 0.4rem;
    width: 100%;
    border-radius: 4px;
    margin-top: 6%;
`

export const DateContainer = styled.div`
    margin-top: 1vh;
    margin-bottom: 1vh;
    height: 65vh;
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
    };
`

export const Titulo = styled.div`
    margin-top: 5%;
    align-items: center;
    justify-content: center;
    margin-bottom: 5%;
`