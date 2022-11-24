import { ArrowsDownUp, MapPin, Question } from "phosphor-react";
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
          <Input placeholder="Digite algo..." />
        </Pesquisa>
        <MapContainer>
          <Icon1>
            <MapPin size={32} id="lblMap" />
          </Icon1>
          <TitleMap id="lblMap" >Mudar</TitleMap>
        </MapContainer>
      </HeaderContent>

    </Container>
  )
}
