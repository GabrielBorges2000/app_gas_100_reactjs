import React from 'react';

import {
    Container,
    TitleName,
    TitleType,
    Value,

} from './styles';

type Props = {
    titleName?: string,
    titleType?: string,
    amount?: number,
    amountCentus?: number,
}

export function Title({ titleName, titleType, amount, amountCentus }: Props) {
    return (
        <Container>
            <TitleName>{titleName}</TitleName>
            <TitleType>{titleType}</TitleType>
            <Value>R$<b>{amount},{amountCentus}</b></Value>
        </Container>
    )
}
