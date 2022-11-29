import { NavLink } from 'react-router-dom';
import Star from '../../assets/star.svg'
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
    amount: number,
    amountCentus: number,
    logoName: string,
    type: 'orange' | 'gray' | 'yellow' | 'green';
}

export function StoreCard({amount, amountCentus, logoName,note,timeMinutes,timeSeconds,titleStore,type} : Props) {
    const { bag, handleUpdateBag } = useBag();

    function handleAdd() {
        handleUpdateBag({
            ...bag,
            amount: amount       
        });
    }

    return (
        <Container>
            <NavLink to="/Cadastro">
                <Cards >
                    <LogoContainer type={type}>
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