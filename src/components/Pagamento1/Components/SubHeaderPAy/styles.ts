import styled from 'styled-components';

export const Container = styled.div`
    height: 40px;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    border-bottom: 1px solid ${({ theme }) => theme.text_detail};
`;

export const TitleNumber = styled.p`
    width: 30px;
    height: 30px;

    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 500;

    border-radius: 50%;

    color: ${({theme}) => theme.text} ;
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
