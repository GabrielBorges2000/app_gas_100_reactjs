import { ArrowsDownUp, MapPin, Question } from "phosphor-react";
import { useState } from "react";
import { useBag } from "../../hooks/bag";
import {
  Container,
  HeaderContainer,
  HeaderContent,
  Icon,
  Icon1,
  Input,
  Title,
  TitleSecond,
  Icons,
  Pesquisa,
  MapContainer,
  TitleMap,
} from "./styles";


export function Header() {
  const { bag, handleUpdateBag } = useBag();
  const [location, setLocation] = useState('');

  function handleNext() {
    handleUpdateBag({
      ...bag,
      location: location,
    })
  }

  return (
    <Container>
      <HeaderContainer>
        <Title>Escolha uma revenda</Title>
        <Icons>
          <Icon>
            <ArrowsDownUp size={24} id="lblArrow" />
          </Icon>
          <Icon>
            <Question size={24} id="lblQuestion" />
          </Icon>
        </Icons>

      </HeaderContainer>
      <HeaderContent>
        <Pesquisa>
          <TitleSecond>Botijões de 13Kg em:</TitleSecond>
          <Input
            value={location}
            onChange={e => setLocation(e.target.value)}
            placeholder="Digite algo..."
          />
        </Pesquisa>
        <MapContainer onClick={handleNext}>
          <Icon1>
            <MapPin size={32} id="lblMap" />
          </Icon1>
          <TitleMap id="lblMap" >Mudar</TitleMap>
        </MapContainer>
      </HeaderContent>

    </Container>
  )
}
