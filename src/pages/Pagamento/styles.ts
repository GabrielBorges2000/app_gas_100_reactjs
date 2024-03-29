import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    background: ${({ theme }) => theme.background};

    a:link {
    text-decoration: none;
    }

    a:visited {
    text-decoration: none;
    }

    a:hover {
    text-decoration: none;
    }

    a:active {
    text-decoration: none;
    }

    a {
    color: ${({ theme }) => theme.title};
    }
`;

export const ContainerPage = styled.div`
    display: flex;
    flex-direction: column;

    background: ${({ theme }) => theme.background};
    
`;

export const Button = styled.button`
    width: 100px;
    height: 50px;
    border: none;
    background: ${({ theme }) => theme.header};
    border-radius: 50px;
    color: ${({ theme }) => theme.white};

    @media (max-width: 720px) {
    }

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

    background: transparent;
`;
export const PropsButton = styled.div`
    margin: 0 5%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    
`;

export const FinalButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;


`;



