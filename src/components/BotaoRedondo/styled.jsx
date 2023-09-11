import styled from 'styled-components'

export const RoundButton = styled.button`
    width: 64%;
    height: 58%;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    align-items: center;
    justify-content: center;
    align-text: center;
    transition: background-color 0.3s, color 0.3s, border 0.3s;
    /* Gradiente de cor na borda */
    border: 11px solid #87C43C;

    &:hover {
        border: 11px solid #58A47C; 
    }
`;

export const CenteredButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  margin-bottom: 10vh;
`;

export const RoundImage = styled.img`
  width: 25%;
  height: auto;
  margin: 0 auto 7%;

`;