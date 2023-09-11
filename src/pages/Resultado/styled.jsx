
import styled from "styled-components"
import fundoMapa from '../../assets/fundoMapa.png';

export const HomePageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${fundoMapa});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
`;

export const ContentContainer = styled.div`
    justify-content: space-between; 
    align: center;
`;