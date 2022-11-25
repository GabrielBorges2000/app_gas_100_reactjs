import styled from 'styled-components';

export const Container = styled.div`
    width: 70%;
    height: 100px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 0 25px;
    margin-bottom: 10px;

    border-radius: 5px;

    background: ${({theme}) => theme.background_secondary};

`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
`;

export const Title = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 500;

    color: ${({ theme }) => theme.text};

    margin-left: 5px;
`;
export const TitleName = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: bold;

    color: ${({theme}) => theme.header};

    margin-bottom: 20px;
`;

export const ButtonCheck = styled.div`
    checkbox {
        background-color: #eea;
    }
`;


export const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

`;
