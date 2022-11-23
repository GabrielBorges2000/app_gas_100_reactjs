import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    z-index: 1;
    position: absolute;

    margin-top: 305px ;

    @media (max-width: 720px){
        margin-top: 160px ;
        
    }


    b {
        font-size: 24px;
    }
`;

export const Cards = styled.div`
    display: flex;
    flex-direction: row;

    width: 90%;
    height: 120px;

    background: ${({theme}) => theme.background_secondary};

    border-radius: 5px;
    margin: auto;
    margin-top: 20px;

    @media (max-width: 720px) {
        height: 100px;
    }

    border-bottom: 1px solid ${({ theme }) => theme.text_detail};
   
`;

export const Title = styled.p`
    font-family: 'Roboto';
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
    color: ${({ theme }) => theme.text};

`;
export const LogoContainer = styled.p`
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center; 
    
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background: #FD841F;
    color: ${({ theme }) => theme.background_secondary};
`;
export const LogoContainer2 = styled.p`
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center; 
    
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.background_secondary};
`;
export const LogoContainer3 = styled.p`
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center; 
    
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background: #F49D1A;
    color: ${({ theme }) => theme.background_secondary};
`;


export const Logo = styled.p`
       
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: bold;
    transform: rotate(-0.25turn);
    
`;


export const CardContainer = styled.div`
    width: 95%;
    height: 100%;

    padding: 16px;
    

    @media (max-width: 720px) {
        padding: 10px;
    }


`;

export const Details = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    
`;
     
export const NoteContainer = styled.div`
     
`;
     
export const Note = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.text};

`;
     
export const NoteNumber = styled.p`
    display: flex;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 20px;

    @media (max-width: 720px) {
        font-size: 14px;
    }
`;
     
export const Icon = styled.img`
    width: 15px;

    display: flex;
    align-items: center;
    margin-left: 5px;
     
`;
     
export const TimeContainer = styled.div`
     
`;
     
export const Time = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.text};
`;
     
export const TimeNumber = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 20px;

    @media (max-width: 720px) {
        font-size: 14px;
    }
`;
     
export const AmountContainer = styled.div`
     
`;
     
export const Amount = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.text};
`;
export const AmountNumber = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 20px;

    @media (max-width: 720px) {
        font-size: 14px;
    }
`;
     