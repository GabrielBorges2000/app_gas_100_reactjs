import styled from 'styled-components';

export const Container = styled.button`


    display: flex;
    justify-content: center;
    align-items: center;

    background: ${({theme}) => theme.gas};

    border-radius: 50%;
    border: none;


    @media(max-width: 720px) {
        margin-right: 0;
    }


`;