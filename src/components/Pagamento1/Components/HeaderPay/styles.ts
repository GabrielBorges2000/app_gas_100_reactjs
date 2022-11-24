import styled from 'styled-components';

export const Container = styled.div`
    height: 60px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    margin-bottom: 10px;

    background: ${({ theme }) => theme.header};

    button {
        
    }

`;

export const BackButton = styled.button`

    background-color: transparent;
    color: ${({ theme }) => theme.background_secondary};
    border: none;

`;
export const Title = styled.h2`

    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px ;

    color: ${({ theme }) => theme.background_secondary};

`;
export const QuestionButton = styled.button`

    background-color: transparent;
    color: ${({ theme }) => theme.background_secondary};
    border: none;

`;