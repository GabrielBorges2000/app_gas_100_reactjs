import styled from 'styled-components';

export const Container = styled.div`
    width: 40%;

    background: ${({theme}) => theme.background_secondary};

    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 10px 0;
    padding: 10px;

    border-radius: 5px;
    border: 1px solid ${({theme})=> theme.text_detail};

    @media(max-width: 720px) {
        width: 80%;
    } 
        
    *{
        font-family: 'Roboto', sans-serif;
        padding-bottom: 10px;
    }

    img {
        width: 80px;
    }
`;

export const Confirm = styled.p`
    font-size: 18px;
    font-weight: bold;
`;

export const Resume = styled.p`
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 20px;
`;

export const ResumeContainer = styled.div`

`;
export const Gas = styled.p`

`;

export const Store = styled.p`

`;

export const DeliveryLocation = styled.p`

`;

export const Name = styled.p`

`;

export const PayFormat = styled.p`

`;

export const Value = styled.p`

`;

export const Time = styled.p`

`;
