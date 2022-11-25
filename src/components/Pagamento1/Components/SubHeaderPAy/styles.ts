import styled from 'styled-components';

export const Container = styled.div`
    height: 50px;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    border-bottom: 1px solid ${({ theme }) => theme.text_detail};
    margin-bottom: 10px;

    background: ${({ theme }) => theme.background_secondary};
`;

export const TitleNumber = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;

    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 500;

    border-radius: 50%;

    color: ${({theme}) => theme.background_secondary} ;
    background-color: ${({ theme }) => theme.orange};
`;

export const Title = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 500;
    color: ${({theme}) => theme.text};
`;

export const TitleAmount = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: regular;
    color: ${({theme}) => theme.text};

    b{
      font-size: 20px;  
    }
`;
