import { CaretLeft, CaretRight } from 'phosphor-react';
import { StoreCard } from '../../components/StoreCard';
import Gas from '../../assets/Gas.png'


import {
  Button,
  Container,
  Image,
  ButtonProps,
  ImageContainer,
  InputContact,
  InputContainer,
  InputDDD,
  Title,
  Card,
  ButtonContainer,
  TitleButton
} from './styles';

import { NavLink } from 'react-router-dom';
import { useBag } from '../../hooks/bag';
import { useState } from 'react';



export function Cadastro() {
  const { bag, handleUpdateBag } = useBag();
  const [phoneDDD, setPhoneDDD] = useState('');
  const [phoneContact, setPhoneContact] = useState('');

  function handleNext() {
    handleUpdateBag({
      ...bag,
      phoneDDD: Number(phoneDDD),
      // phoneContact: phoneContact,
      phoneContact: Number(phoneContact),
    })
  }

  return (
    <Container>
      <ImageContainer>
        <Image src={Gas} />
      </ImageContainer>

      <Card>
        <StoreCard
          typeCard={bag.typeCard}
          logoName={bag.logoName}
          titleStore={bag.titleStore}
          note={4.8}
          timeMinutes={15}
          timeSeconds={30}
          valor={79}
        />
      </Card>

      <InputContainer >
        <InputDDD
          value={phoneDDD}
          onChange={e => setPhoneDDD(e.target.value)}
          placeholder="DDD"
          maxLength={2}
          minLength={1}
          type="number"
        />
        <InputContact
          value={phoneContact}
          onChange={e => setPhoneContact(e.target.value)}
          placeholder="Seu Telefone"
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
          <NavLink to="/CadastroName">
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