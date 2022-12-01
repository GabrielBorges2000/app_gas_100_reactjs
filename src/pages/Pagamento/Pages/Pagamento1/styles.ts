import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: ${({ theme }) => theme.background};

    
`;

export const Button = styled.button`
    width: 50%;
    height: 40px;

    border: none;
    border-radius: 50px;

    background: ${({ theme }) => theme.header};
    color: ${({ theme }) => theme.white};

    margin-top: 40px;
    margin-bottom: 20px;


`;