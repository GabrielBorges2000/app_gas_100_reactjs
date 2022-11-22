import styled, { css } from 'styled-components';

type Props = {
    widthValue?: number;
}

export const Container = styled.div`
    margin: 10px;             

    flex: 1;
    display: flex;
    flex-direction: column;

    strong {
        font-size: 14px;
        color: ${({ theme }) => theme.text_detail};
    }

    @media (max-width: 520px) {
        min-width: 200px;
    }
`;

export const InputContent = styled.div<Props>`
    width: 100%;
    min-height: 30px;
    padding: 0 20px;
    
    display: flex;
    align-items: center;

    border-radius: 5px;
    background-color: ${({ theme }) => theme.shape};

    ${({ widthValue }) => !!widthValue && css`
        width: ${widthValue}px;
    `};

    input {
        width: 100%;
        color: ${({ theme }) => theme.text};
        border: 0;
        background-color: transparent;
        outline: 0;
        font-family: 'Roboto', sans-serif;
        font-size: 12px;
    }

   
`;