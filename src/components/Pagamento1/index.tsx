import {
    Container, PropsButton, TitleButton, Button, ButtonContainer, ContainerPage
  } from "./styles";
  import { CaretLeft, CaretRight } from "phosphor-react";
  
  import { useState } from 'react';
  import { TabLoading } from "../../components/TabLoading";

export function Pagamento1() {
    const [stap, setStap] = useState(0);

    function handleNext(isNext: boolean = true){
        setStap(isNext ? stap + 1 : stap - 1);
    }
    return (
        <Container>
            <TabLoading stap={stap} />  
           
           {stap === 0
           ? <ContainerPage>

            <ButtonContainer>
            <Button type="submit" onClick={() => handleNext(true)}>
            {/* <Button type="submit" onClick={() => handleNext(true)}> */}
            <CaretRight size={32} />
           </Button>
           <TitleButton>Next</TitleButton>
           </ButtonContainer>

           </ContainerPage>
            
            : (stap === 1
              ? <ContainerPage>
              <PropsButton>
          <ButtonContainer>
          <Button type="submit" onClick={() => handleNext(false)}>
          <CaretLeft size={32} />
           
         </Button>
         <TitleButton>Back</TitleButton>
         </ButtonContainer>

          <ButtonContainer>
          <Button type="submit" onClick={() => handleNext(true)}>
          <CaretRight size={32} />
         </Button>
         <TitleButton>Next</TitleButton>
         </ButtonContainer>
          </PropsButton>
          </ContainerPage>
              : <ContainerPage>
              <PropsButton>
          <ButtonContainer>
          <Button type="submit" onClick={() => handleNext(false)}>
          <CaretLeft size={32} />
           
         </Button>
         <TitleButton>Back</TitleButton>
         </ButtonContainer>

          <ButtonContainer>
          <Button type="submit" onClick={() => handleNext(true)}>
          <CaretRight size={32} />
         </Button>
         <TitleButton>Next</TitleButton>
         </ButtonContainer>
          </PropsButton>
          </ContainerPage>
              )             
        }  
    </Container>
    )
}