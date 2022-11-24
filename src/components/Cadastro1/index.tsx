import { CaretRight } from 'phosphor-react';
import React from 'react';
import { StoreCard } from '../StoreCard';
import Gas from '../../assets/Gas.png'
import { InputHTMLAttributes } from 'react';

import {
  Button,
  Container, Image, ImageContainer, InputContact, InputContainer, InputDDD, InputName, Title, Card, ButtonContainer, TitleButton
} from './styles';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  maxLength?: Number;
  minLength?: Number;
}

export function Cadastro1({ ...Props }: Props) {
  return (
    <Container>
      <ImageContainer>
        <Image src={Gas} />
      </ImageContainer>

      <Card><StoreCard /></Card>

      <InputName
        {...Props}
        placeholder="Nome"
        maxLength={30}
        minLength={1}
        type="Text"
      />
      <InputContainer >
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
          type="number"

        />
      </InputContainer>


      <Title> Usaremos seu número de telefone para informá-lo(a) </Title>
      <Title> sobre sua entrega.</Title>

      <ButtonContainer>
        <Button type="submit">
          <CaretRight size={32} />
        </Button>
        <TitleButton>Próximo</TitleButton>
      </ButtonContainer>

    </Container>
  )
}