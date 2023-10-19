import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: rgb(255, 237, 245);
        padding-left: 70px;
        padding-right: 70px;
    }
`;

export const AppContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
`;

export const MovieContainer = styled.div`
    min-width: 200px;
    background-color: rgb(255, 142, 193);
    margin: 10px;
    position: relative;
    ${MovieOverview}:hover & {
        display: block;
    }
`;

export const MoviePoster = styled.img`
    max-width: 100%;
`;

export const MovieInfo = styled.div`
    font-size: 12px;
    color: #fff;
    padding: 10px;
    display: flex;
    justify-content: space-between;    
`;

export const MovieOverview = styled.div`
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    font-size: 12px;
    padding: 20px;
    background-color: rgb(0, 0, 0, 0.7);
    height: 316px;
`;
