import { Storefront } from 'phosphor-react';
import Star from '../../assets/star.svg'
import { useBag } from '../../hooks/bag';

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
    amount?: number;
    amountCentus?: number;
    logoName?: string;
    typeCard: 'orange' | 'gray' | 'yellow' | 'green';
}

export function CardHeader({ titleClient, typeCard }: Props) {
    const { bag } = useBag();

    return (
        <Container>
            <Storefront size={40} />

            <CardDetail>

                <DetailHeader>
                    <Title >{titleClient}</Title>
                    <LogoContainer type={typeCard}>
                        <Logo >{bag.logoName}</Logo>
                    </LogoContainer>
                </DetailHeader>

                <DetailContent>
                    <NoteNumber id="lblNota" >
                        <b>{bag.note}</b> <Icon src={Star} />
                    </NoteNumber>
                    <TimeNumber id="lblTime"><b>{bag.timeMinute}-{bag.timeSeconds}</b> min</TimeNumber>
                    <AmountNumber id="lblAmount">R$<b>{bag.valor}</b>,{bag.valueCentus}</AmountNumber>
                </DetailContent>

            </CardDetail>

        </Container>
    )
}