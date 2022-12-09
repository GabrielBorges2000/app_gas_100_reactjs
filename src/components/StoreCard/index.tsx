import { Star } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import { useBag } from '../../hooks/bag';

import {
    Amount,
    AmountContainer,
    AmountNumber,
    CardContainer,
    Cards,
    Container,
    Details,
    Icon,
    Logo,
    LogoContainer,
    Note,
    NoteContainer,
    NoteNumber,
    Time,
    TimeContainer,
    TimeNumber,
    Title
} from "./styles";

type Props = {
    titleStore: string,
    note: number,
    timeMinutes: number,
    timeSeconds: number,
    valor: number,
    logoName: string,
    typeCard: 'orange' | 'gray' | 'yellow' | 'green';
}

export function StoreCard({ valor, logoName, note, timeMinutes, timeSeconds, titleStore, typeCard }: Props) {
    const { bag, handleUpdateBag } = useBag();

    function handleAdd() {
        console.log({
            ...bag,
            typeCard: typeCard,
            logoName: logoName,
            titleStore: titleStore,
            timeMinute: timeMinutes,
            timeSeconds: timeSeconds,
            valor: valor,
            note: note,
        });

        handleUpdateBag({
            ...bag,
            typeCard: typeCard,
            logoName: logoName,
            titleStore: titleStore,
            timeMinute: timeMinutes,
            timeSeconds: timeSeconds,
            valor: valor,
            note: note,
        });
    }

    return (
        <Container>
            <NavLink to="/Cadastro" onClick={handleAdd}>
                <Cards >
                    <LogoContainer type={typeCard}>
                        <Logo id='lblLogo'>{logoName}</Logo>
                    </LogoContainer>

                    <CardContainer>
                        <Title id="lblTitle">{titleStore}</Title>
                        <Details>
                            <NoteContainer>
                                <Note>Nota</Note>
                                <NoteNumber id="lblNota" >
                                    <b>{note}</b> <Icon><Star size={14} weight='fill' color='#F49D1A' /></Icon>
                                </NoteNumber>
                            </NoteContainer>
                            <TimeContainer>
                                <Time>Tempo Médio</Time>
                                <TimeNumber id="lblTime"><b>{timeMinutes}-{timeSeconds}</b> min</TimeNumber>
                            </TimeContainer>
                            <AmountContainer>
                                <Amount>Preço</Amount>
                                <AmountNumber id="lblAmount">R$<b>{valor}</b>,99</AmountNumber>
                            </AmountContainer>
                        </Details>
                    </CardContainer>
                </Cards>
            </NavLink>
        </Container>
    )
}