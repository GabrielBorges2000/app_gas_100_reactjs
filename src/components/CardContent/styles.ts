import styled from 'styled-components';

export const Container = styled.div`
    width: 75%;
    height: 250px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 40px;

    margin-bottom: 10px ;

    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    background: ${({ theme }) => theme.white};

    * {
        font-family: 'Roboto', sans-serif;
    }

    b {        
        font-weight: bold;
        font-size: 18px;
    }


    @media (max-width: 720px){
        width: 75%;
        height: 180px;
        padding: 0 20px;
    }
`;

export const Image = styled.img`

    width: 150px;
    margin: 0;

    @media (max-width: 720px){
        width: 80px;
    }

`;

export const GasContainer = styled.div`
    width: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    
`;

export const Number = styled.p`

    margin: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 50px;
    height: 50px;

    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 500;

    border-radius: 50%;

    color: ${({ theme }) => theme.white} ;
    background-color: ${({ theme }) => theme.orange};

    z-index: 1;
    position: absolute;

    @media (max-width: 720px){
        width: 25px;
        height: 25px;
        font-size: 12px;
    }
`;

export const ButtonContainer = styled.div`
    width: 50%;
    
    display: flex;
    flex: row;
    align-items: center;
`;





