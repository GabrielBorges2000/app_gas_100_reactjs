import React from 'react';
import Concluido from '../../assets/concluido.png'

import {
    Container,
    Confirm,
    Resume,
    Gas,
    Store,
    DeliveryLocation,
    Name,
    PayFormat,
    Value,
    Time,
    ResumeContainer,

} from './styles';

type Props = {
    gasType: string; store: string; location: string; name: string; pay: string; value: number; valueCentus: number; timeMinute: number; timeSeconds: number; phoneDDD: Number; phonePrimary?: number; phoneSecundary?: number;
}

export function ConfirmacaoDados({ store, location, name, pay, value, gasType, timeMinute, timeSeconds, valueCentus, phoneDDD, phonePrimary, phoneSecundary }: Props) {
    return (
        <Container>
            <Confirm>Pedido Confirmado</Confirm>
            <img src={Concluido} />

            <Resume>Resumo</Resume>

            <ResumeContainer>
                <Gas><b>Gas:</b> 13Kg - {gasType}</Gas>
                <Store><b>Estebelecimento:</b> {store}</Store>

                <DeliveryLocation><b>Endereço:</b> {location}</DeliveryLocation>
                <Name><b>Cliente:</b> {name}</Name>
                <PayFormat><b>Forma de Pagamento:</b> {pay} (Cobrar na entrega)</PayFormat>
                <Value><b>Valor:</b> R${value},{valueCentus}</Value>
                <Time><b>Tempo estimado para entrega:</b> {timeMinute} - {timeSeconds}min</Time>
                
            </ResumeContainer>

        </Container>
    )
}
