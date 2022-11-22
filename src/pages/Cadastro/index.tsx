import { StoreCard2 } from "../../components/StoreCard2";
import Gas from '../../assets/Gas.png'

import {
  Container, Image, ImageContainer, Title, InputContainer, TitleButton, Button,
} from "./styles";
import { CaretRight } from "phosphor-react";
import { Input } from "../../components/Input";

export function Cadastro() {
  return (
    <Container>
      <ImageContainer>
        <Image src={Gas} />
      </ImageContainer>
      <StoreCard2 />
      <InputContainer>
        <Input
          widthValue={24}
          label="DDD"
          maxLength={3}
          minLength={1}
        />
        <Input
          widthValue={100}
          label="Seu Número"
          maxLength={11}
          minLength={1} />
      </InputContainer>


      <Title> Usaremos seu número de telefone para informá-lo(a) </Title>
      <Title> sobre sua entrega.</Title>

      <Button>
        <CaretRight size={32} />
      </Button>
      <TitleButton>
        Próximo
      </TitleButton>
    </Container>
  )
}