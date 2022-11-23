import { StoreCard2 } from "../../components/StoreCard2";
import Gas from '../../assets/Gas.png'

import {
  Container, Image, ImageContainer, Title, InputContainer, TitleButton, Button, InputDDD, InputContact,
} from "./styles";
import { CaretRight } from "phosphor-react";
import { InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  maxLength?: Number;
  minLength?: Number;
}


export function Cadastro({...Props} : Props) {
  return (
    <Container>
      <ImageContainer>
        <Image src={Gas} />
      </ImageContainer>
      <StoreCard2 />
      <InputContainer>
        <InputDDD
          {...Props}
          placeholder="DDD"
          maxLength={2}
          minLength={1}
          type="number"
        />
        <InputContact
        {...Props}
          placeholder="94444-4444"
          maxLength={10}
          minLength={1} 
          type="number"/>
      </InputContainer>


      <Title> Usaremos seu número de telefone para informá-lo(a) </Title>
      <Title> sobre sua entrega.</Title>

      <Button type="submit">
        <CaretRight size={32} />
      </Button>
      <TitleButton>
        Próximo
      </TitleButton>
    </Container>
  )
}