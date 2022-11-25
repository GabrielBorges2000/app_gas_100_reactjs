/* import { Star } from "phosphor-react"; */
import { NavLink } from 'react-router-dom';
import Star from '../../assets/star.svg'

import {
    Amount, AmountContainer, AmountNumber, CardContainer, Cards, Container, Details, Icon, Logo, LogoContainer, LogoContainer2, LogoContainer3, Note, NoteContainer, NoteNumber, Time, TimeContainer, TimeNumber, Title
} from "./styles";


type StoreCardProps = {
    logoName?: string;
    titleClient?: string;
    note?: number;
    timeMinutes?: number;
    timeSeconds?: number;
    amount?: number;
    amountCentus?: number;
}


export function StoreCard({ titleClient, note, timeMinutes, timeSeconds, amount, amountCentus, logoName, ...rest }: StoreCardProps) {

    return (
        <Container>
            <NavLink to="/Cadastro" style={{

            }}>
                <Cards >
                    <LogoContainer>
                        <Logo id='lblLogo'>{logoName}</Logo>
                    </LogoContainer>

                    <CardContainer>
                        <Title id="lblTitle">{titleClient}</Title>
                        <Details>
                            <NoteContainer>
                                <Note>Nota</Note>
                                <NoteNumber id="lblNota" >
                                    <b>{note}</b> <Icon src={Star} />
                                </NoteNumber>
                            </NoteContainer>
                            <TimeContainer>
                                <Time>Tempo Médio</Time>
                                <TimeNumber id="lblTime"><b>{timeMinutes}-{timeSeconds}</b> min</TimeNumber>
                            </TimeContainer>
                            <AmountContainer>
                                <Amount>Preço</Amount>
                                <AmountNumber id="lblAmount">R$<b>{amount}</b>.{amountCentus}</AmountNumber>
                            </AmountContainer>
                        </Details>
                    </CardContainer>
                </Cards>
            </NavLink>


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