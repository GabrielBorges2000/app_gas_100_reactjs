import styled from 'styled-components';

export const Container = styled.div`
    width: auto;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-bottom: 20px;

    background: ${({ theme }) => theme.white};
    
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 375px;
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.header};

    @media (max-width: 720px){
        height: 260px;
        height: 200px;
    }

`;

export const Image = styled.img`
    
    width: 50%;

    padding-bottom: 60px;

    @media (max-width: 720px){
        padding-bottom: 40px;
        width: 40%;

    }


`;



export const InputName = styled.input`
    display: flex;
    justify-content: space-around;

    width: 200px;

    border: none;
    outline: 0;
    height: 40px;
    border-radius: 3px;

    margin-bottom: 10px ;
    margin-top: 30px;

    padding-left: 2px;

    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    background-color: ${({ theme }) => theme.background};
     
    @media (max-width: 720px){
        width: 70%; 

    }

`;



export const Title = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    color: ${({ theme }) => theme.title};
    padding-top: 8px;
`;


export const Button = styled.button`
    width: 50px;
    height: 50px;
    border: none;
    background: ${({ theme }) => theme.header};
    border-radius: 50px;
    color: ${({ theme }) => theme.white};

`;

export const TitleButton = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 12px;
    color: ${({ theme }) => theme.title};
    align-items: center;
    padding-top: 5px;

`;
export const ButtonContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 10px;

`;

export const Card = styled.div`
width: 90%;
z-index: 1;

margin-top: -120px;

position: static;

@media (max-width: 720px) {
    margin-top: -100px;
    }

`;
export const ButtonProps = styled.div`
    width: 100%;
    margin-top: 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    

`;





