import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    
    padding-bottom: 20px;

    align-items: center ;

    background: ${({theme}) => theme.background_secondary};

    
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.header};

    @media (max-width: 720px){
        height: 200px;
    }

`;

export const Image = styled.img`
    
    height: ;
    width: 50%;

    padding-bottom: 60px;

    @media (max-width: 720px){
        padding-bottom: 40px;

    }


`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 40px;
    padding-bottom: 30px;

    @media (max-width: 720px){


    }
   
`;


export const Title = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    color: ${({ theme }) => theme.title};
    padding-bottom: 10px;
`;


export const Button =styled.button`
    width: 50px;
    height: 50px;
    border: none;
    background: ${({theme}) => theme.header};
    border-radius: 50px;
    color: ${({theme}) => theme.background_secondary};

`;

export const TitleButton = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 12px;
    color: ${({ theme }) => theme.title};
    align-items: center;
    padding-top: 10px;

`;



