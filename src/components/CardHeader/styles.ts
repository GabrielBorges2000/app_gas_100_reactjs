import styled, { css } from "styled-components";

interface StoreCardProps {
    type: 'orange' | 'gray' | 'yellow' | 'green';
}

export const Container = styled.div`
    width: 75%;
    height: 90px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;    

    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    background: ${({ theme }) => theme.white};

    * {
        font-family: 'Roboto', sans-serif;
    }

    b {        
        font-weight: bold;
        font-size: 18px;
    }

    @media(max-width: 720px) {
        padding: 0 20px;
    }


`;

export const Title = styled.p`
    font-size: 18px;
    font-weight: bold;
`;

export const NoteNumber = styled.p`
    display: flex;
    flex-direction: row;
`;

export const Icon = styled.img`
    width: 15px;

    display: flex;
    align-items: center;
    margin-left: 5px;
`;

export const TimeNumber = styled.p`
    font-size: 14px;
    font-weight: bold;
`;

export const AmountNumber = styled.p`
    font-size: 14px;
    font-weight: bold;
`;

export const CardDetail = styled.div`
    width: 80%;
    height: 70%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

`;

export const DetailHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`;

export const DetailContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`;

export const LogoContainer = styled.div<StoreCardProps>`
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    ${({ type }) => type === 'orange' && css`
    background: ${({ theme }) => theme.orange};
    `};

    ${({ type }) => type === 'gray' && css`
    background: ${({ theme }) => theme.text};
    `};

    ${({ type }) => type === 'yellow' && css`
    background: ${({ theme }) => theme.yellow};
    `};

    ${({ type }) => type === 'green' && css`
    background: ${({ theme }) => theme.green};
    `};

    border-radius: 2px;
`;

export const Logo = styled.p`
    width: 100%;

    font-size: 14px;
    font-weight: 500;
    
    padding: 2px 5px;

    color: ${({ theme }) => theme.white};

    
`;
