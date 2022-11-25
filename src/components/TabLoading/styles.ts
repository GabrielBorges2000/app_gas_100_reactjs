import styled from 'styled-components';

export const Container = styled.div`
    background: ${({ theme }) => theme.background_secondary};  
    border-bottom: 1px solid ${({ theme }) => theme.text_detail}; 
`;
