import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center
    align-items: center;

    background: ${({theme}) => theme.background_secondary};
`;
export const CheckBox = styled.input`

`;