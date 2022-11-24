import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    border-bottom: 1px solid ${({ theme }) => theme.text_detail};
`;

export const TitleNumber = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: regular;
    color: ${({theme}) => theme.text} ;
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
