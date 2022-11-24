import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ theme }) => theme.background_secondary};
  border-bottom: 1px solid ${({ theme }) => theme.text_detail};

`;
export const Title = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px ;

  color: ${({ theme }) => theme.shape};
    
`;
export const Icons = styled.a` 
  display: flex;
  justify-content: space-between;
`;


export const Icon = styled.button`
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  color: ${({ theme }) => theme.shape};
  font-weight: bold;
  border: none;
  margin-left: 5px;
`;
export const Icon1 = styled.button`
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  color: ${({ theme }) => theme.header};
  border: none;
`;
export const Input = styled.input`
  border: none;
  outline:0;
  width: 100%;
  height: 24px;
  border-radius: 3px;
  padding-left: 4px ;

  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  background-color: ${({ theme }) => theme.shape};
`;

export const HeaderContainer = styled.div`
  width: 90%;
  height: 30px;
  display: flex;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.header};
  padding:20px 5%;

  position: fixed;
  z-index: 1;

`;

export const HeaderContent = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding:20px 5%;

`;

export const TitleSecond = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 12px;
  color: ${({ theme }) => theme.text};

  margin-bottom: 10px;
`;

export const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const Pesquisa = styled.div`
width: 80%;
`;

export const TitleMap = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 12px;
  color: ${({ theme }) => theme.header};
`;
