/* import { Star } from "phosphor-react"; */
import Star from '../../assets/star.svg'

import {
    Amount, AmountContainer, AmountNumber, CardContainer, Cards, Container, Details, Icon, Logo, LogoContainer, LogoContainer2, LogoContainer3, Note, NoteContainer, NoteNumber, Time, TimeContainer, TimeNumber, Title
} from "./styles";



export function StoreCard() {
    return (
        <Container>
            <Cards >
                <LogoContainer>
                    <Logo id='lblLogo'>SuperGasbraz</Logo>
                </LogoContainer>

                <CardContainer>
                    <Title id="lblTitle">Tonho Gás</Title>
                    <Details>
                        <NoteContainer>
                            <Note>Nota</Note>
                            <NoteNumber id="lblNota" >
                                <b>4,8</b> <Icon src={Star} />
                            </NoteNumber>
                        </NoteContainer>
                        <TimeContainer>
                            <Time>Tempo Médio</Time>
                            <TimeNumber id="lblTime"><b>15-30</b> min</TimeNumber>
                        </TimeContainer>
                        <AmountContainer>
                            <Amount>Preço</Amount>
                            <AmountNumber id="lblAmount">R$<b>79</b>.99</AmountNumber>
                        </AmountContainer>
                    </Details>
                </CardContainer>
            </Cards>


            {/* <Cards>
                <LogoContainer2>
                    <Logo id='lblLogo'>Multimarcas</Logo>
                </LogoContainer2>
                
                <CardContainer>
                    <Title id="lblTitle">Limagás</Title>
                    <Details>
                        <NoteContainer>
                            <Note>Nota</Note>
                            <NoteNumber id="lblNota" >
                                <b>4,8</b> <Icon src={Star} />
                            </NoteNumber>
                        </NoteContainer>
                        <TimeContainer>
                            <Time>Tempo Médio</Time>
                            <TimeNumber id="lblTime"><b>15-30</b> min</TimeNumber>
                        </TimeContainer>
                        <AmountContainer>
                            <Amount>Preço</Amount>
                            <AmountNumber id="lblAmount">R$<b>79</b>.99</AmountNumber>
                        </AmountContainer>
                    </Details>
                </CardContainer>
            </Cards>

            <Cards>
                <LogoContainer3>
                    <Logo id='lblLogo'>COPAGAZ</Logo>
                </LogoContainer3>
                
                <CardContainer>
                    <Title id="lblTitle">Ramogás</Title>
                    <Details>
                        <NoteContainer>
                            <Note>Nota</Note>
                            <NoteNumber id="lblNota" >
                                <b>4,8</b> <Icon src={Star} />
                            </NoteNumber>
                        </NoteContainer>
                        <TimeContainer>
                            <Time>Tempo Médio</Time>
                            <TimeNumber id="lblTime"><b>15-30</b> min</TimeNumber>
                        </TimeContainer>
                        <AmountContainer>
                            <Amount>Preço</Amount>
                            <AmountNumber id="lblAmount">R$<b>79</b>.99</AmountNumber>
                        </AmountContainer>
                    </Details>
                </CardContainer>
            </Cards> */}



        </Container>
    )
}