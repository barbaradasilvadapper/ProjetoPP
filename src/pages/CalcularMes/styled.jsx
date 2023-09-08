import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7%;
  margin-right: 7%;
  align-items: right;
`

export const Question = styled.h2`
  margin: 20px 0;
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
    margin-top: 1rem;
    padding: 0.4rem;
    width: 100%;
    border-radius: 4px;
    margin-top: 6%;
    margin-left: 28%
`

export const DateContainer = styled.div`
    margin-top: 1vh;
    margin-bottom: 1vh;
    height: 60vh;
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

export const Titulo = styled.div`
    margin-top: 5%;
    align-items: center;
    justify-content: center;
    margin-bottom: 5%;
`