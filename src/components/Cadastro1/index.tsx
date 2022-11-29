import { CaretLeft, CaretRight } from 'phosphor-react';
import React from 'react';
import { StoreCard } from '../StoreCard';
import Gas from '../../assets/Gas.png'
import { InputHTMLAttributes } from 'react';

import {
  Button,
  Container, Image, ButtonProps, ImageContainer, InputContact, InputContainer, InputDDD, InputName, Title, Card, ButtonContainer, TitleButton, InputLocation
} from './styles';
import { NavLink } from 'react-router-dom';
import { useBag } from '../../hooks/bag';



export function Cadastro1() {
  const { bag, handleUpdateBag } = useBag();

  function handleNext() {
    handleUpdateBag({
      ...bag,
      name: '',
      location: '',
      phoneDDD: 11,
      phonePrimary: 93435,
      phoneSecundary: 4029,

    })
  }

  return (
    <Container>
      <ImageContainer>
        <Image src={Gas} />
      </ImageContainer>

      <Card>
        <StoreCard
          type='orange'
          logoName="SupergasBraz"
          titleClient="Tonho Gás"
          note={4.8}
          timeMinutes={15}
          timeSeconds={30}
          amount={79}
          amountCentus={99}
        />
      </Card>

      <InputName
        placeholder="Nome"
        maxLength={30}
        minLength={1}
        type="Text"
      />
      <InputLocation
        placeholder="Seu endereço"
        maxLength={50}
        minLength={1}
        type="Text"
      />
      <InputContainer >
        <InputDDD
          placeholder="DDD"
          maxLength={2}
          minLength={1}
          type="number"
        />
        <InputContact
          placeholder="94444-4444"
          maxLength={10}
          minLength={1}
          type="number"

        />
      </InputContainer>


      <Title> Usaremos seu número de telefone para informá-lo(a) </Title>
      <Title> sobre sua entrega.</Title>
      <ButtonProps>
        <ButtonContainer>
          <NavLink to="/">
            <Button type="button">
              <CaretLeft size={32} />
            </Button>
          </NavLink>
          <TitleButton>Voltar</TitleButton>
        </ButtonContainer>

        <ButtonContainer>
          <NavLink to="/Pagamento">
            <Button type="submit" onClick={handleNext}>
              <CaretRight size={32} />
            </Button>
          </NavLink>
          <TitleButton>Próximo</TitleButton>
        </ButtonContainer>
      </ButtonProps>

    </Container>
  )
}