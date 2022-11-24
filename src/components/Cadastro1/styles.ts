import styled from 'styled-components';

export const Container = styled.div`
    width: auto;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-bottom: 20px;

    background: ${({ theme }) => theme.background_secondary};
    
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 430px;
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.header};

    @media (max-width: 720px){
        height: 260px;
        height: 200px;
    }

`;

export const Image = styled.img`
    
    width: 50%;

    padding-bottom: 60px;

    @media (max-width: 720px){
        padding-bottom: 40px;
        width: 40%;

    }


`;
export const InputDDD = styled.input`
    display: flex;
    justify-content: center;

    border: none;
    outline:0;
    width: 50px;
    height: 40px;
    border-radius: 3px;
    padding: 0px 10px ;

    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    background-color: ${({ theme }) => theme.shape};

    @media (max-width: 720px){
        padding: 0px 10px 0 10px ;
            width: 50px;

        @media (max-width: 520px){
            padding: 0px 10px 0 10px ;
            width: 50px; 
                
                @media (max-width: 420px){
                    padding: 0px 10px ;
                    width: 50px;    
                    
                    @media (max-width: 420px){
                        padding: 0px 10px ;
                            
                    }
                }
        }
    }
`;

export const InputContact = styled.input`
    display: flex;
    justify-content: center;

    border: none;
    outline:0;
    width: 100px;
    height: 40px;
    border-radius: 3px;
    padding: 0px 15px ;

    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    background-color: ${({ theme }) => theme.shape};

    


`;
export const InputName = styled.input`
    display: flex;
    justify-content: space-around;

    margin-top: 16px ;
    margin-bottom: 5px ;
    width: 180px;

    border: none;
    outline: 0;
    height: 40px;
    border-radius: 3px;
    padding: 0px 15px ;

    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    background-color: ${({ theme }) => theme.shape};
    

        
    /* @media (max-width: 720px){
        width: 230px;

        @media (max-width: 520px){
            width: 50%;

            @media (max-width: 455px){
                width: 60%;

            }

        }

    } */

    


`;

export const InputContainer = styled.form`
    display: flex;
    justify-content: space-around;

    margin-top: 10px ;

    width: 230px;
    

        
    @media (max-width: 720px){
        width: 230px;

        @media (max-width: 520px){
            width: 45%;

            @media (max-width: 455px){
                width: 60%;

            }

        }

    }

`;


export const Title = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    color: ${({ theme }) => theme.title};
    padding-top: 8px;
`;


export const Button = styled.button`
    width: 50px;
    height: 50px;
    border: none;
    background: ${({ theme }) => theme.header};
    border-radius: 50px;
    color: ${({ theme }) => theme.background_secondary};

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

`;

export const Card = styled.div`
width: 90%;
z-index: 1;

margin-top: -120px;

position: static;

@media (max-width: 720px) {
    margin-top: -100px;
    }

`;





