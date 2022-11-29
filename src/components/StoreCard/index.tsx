/* import { Star } from "phosphor-react"; */
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Star from '../../assets/star.svg'
import { useBag } from '../../hooks/bag';

import {
    Amount, AmountContainer, AmountNumber, CardContainer, Cards, Container, Details, Icon, Logo, LogoContainer, Note, NoteContainer, NoteNumber, Time, TimeContainer, TimeNumber, Title
} from "./styles";

export function StoreCard() {
    const { bag, handleUpdateBag } = useBag();

    const [amount, setAmount] = useState(0);

    function handleAdd() {
        handleUpdateBag({
            ...bag,
            titleStore: titleStore,
            note: note,
            timeMinutes: timeMinutes,
            timeSeconds: timeSeconds,
            amount: amount,
            amountCentus,
            logoName: logoName,
            navegation:navegation,
            typeCard: typeCard
        });
    }

    return (
        <Container>
            <NavLink to="/Cadastro"  onClick={handleAdd}>
                <Cards >
                    <LogoContainer typeCard={typeCard}>
                        <Logo id='lblLogo'>{logoName}</Logo>
                    </LogoContainer>

                    <CardContainer>
                        <Title id="lblTitle">{titleStore}</Title>
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