import { Storefront } from 'phosphor-react';
import Star from '../../assets/star.svg'

import {
    AmountNumber,
    Container,
    Icon,
    NoteNumber,
    TimeNumber,
    Title,
    DetailHeader,
    DetailContent,
    LogoContainer,
    Logo,
    CardDetail,

} from './styles';

type Props = {
    titleClient?: string;
    note?: number;
    timeMinutes?: number;
    timeSeconds?: number;
    amount?: number;
    amountCentus?: number;
    logoName?: string;
}

export function CardHeader({ amount, amountCentus, note, timeMinutes, timeSeconds, titleClient, logoName }: Props) {
    return (
        <Container>
            <Storefront size={40} />
            
            <CardDetail>

            <DetailHeader>
                <Title >{titleClient}</Title>
                <LogoContainer>
                    <Logo >{logoName}</Logo>
                </LogoContainer>
            </DetailHeader>

            <DetailContent>
                <NoteNumber id="lblNota" >
                    <b>{note}</b> <Icon src={Star} />
                </NoteNumber>
                <TimeNumber id="lblTime"><b>{timeMinutes}-{timeSeconds}</b> min</TimeNumber>
                <AmountNumber id="lblAmount">R$<b>{amount}</b>.{amountCentus}</AmountNumber>
            </DetailContent>

            </CardDetail>

        </Container>
    )
}