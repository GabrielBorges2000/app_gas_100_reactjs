import styled from 'styled-components';

export const Container = styled.div`
    width: 50%;

    margin-left: 80px;

    @media(max-width: 720px) {
        margin-left: 0;
    }

`;

export const TitleName = styled.p`
    font-weight: bold;
    font-size: 24px;

    color: ${({theme})=> theme.text};
    padding-bottom: 5px;

    @media(max-width: 720px) {
        font-size: 18px;
    }
`;

export const TitleType = styled.p`
    font-weight: 500;
    font-size: medium;

    padding-bottom: 5px;

    color: ${({ theme }) => theme.text};

    @media(max-width: 720px) {
        font-size: 12px;
    }
`;

export const Value = styled.p`
    font-size: 12px;
    font-weight: 500;

    color: ${({ theme }) => theme.text_dark};

    
`;