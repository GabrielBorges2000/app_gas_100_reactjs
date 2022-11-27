import styled from 'styled-components';

export const Container = styled.div`
    width: 75%;
    height: 250px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 20px;

    margin-bottom: 10px ;

    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    background: ${({ theme }) => theme.background_secondary};

    * {
        font-family: 'Roboto', sans-serif;
    }

    b {        
        font-weight: bold;
        font-size: 18px;
    }

    @media (max-width: 720px){
        height: 180px;
    }
`;


