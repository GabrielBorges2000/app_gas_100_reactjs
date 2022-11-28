/* import { Star } from "phosphor-react"; */
import { NavLink } from 'react-router-dom';
import Star from '../../assets/star.svg'

import {
    Amount, AmountContainer, AmountNumber, CardContainer, Cards, Container, Details, Icon, Logo, LogoContainer, Note, NoteContainer, NoteNumber, Time, TimeContainer, TimeNumber, Title
} from "./styles";

type StoreCardProps = {
    type: 'orange' | 'gray' | 'yellow' | 'green';
    logoName?: string;
    titleClient?: string;
    note?: number;
    timeMinutes?: number;
    timeSeconds?: number;
    amount?: number;
    amountCentus?: number;
    navegation?: boolean;
}

export function StoreCard({ titleClient, note, timeMinutes, timeSeconds, amount, amountCentus, logoName, navegation, type}: StoreCardProps) {

    return (
        <Container>
            <NavLink to="/Cadastro" >
                <Cards >
                    <LogoContainer type={type}>
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
        </Container>
    )
}