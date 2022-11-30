import React from 'react';
import Concluido from '../../assets/concluido.png'
import { useBag } from '../../hooks/bag';

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
    Image

} from './styles';

export function ConfirmacaoDados() {
    const {bag} = useBag();
    
    return (
        <Container>
            <Confirm>Pedido Confirmado</Confirm>
            <Image src={Concluido} />

            <Resume>Resumo</Resume>

            <ResumeContainer>
                <Gas><b>Gas:</b> 13Kg - {bag.logoName}</Gas>
                <Store><b>Estebelecimento:</b> {bag.titleStore}</Store>
                <Store><b>Contato:</b>{bag.phoneDDD} {bag.phoneContact}</Store>
                <DeliveryLocation><b>Endereço:</b> {bag.location}</DeliveryLocation>
                <Name><b>Cliente:</b> {bag.name}</Name>
                <PayFormat><b>Forma de Pagamento:</b> {bag.pay} (Cobrar na entrega)</PayFormat>
                <Value><b>Valor:</b> R${bag.valor},{bag.valueCentus}</Value>
                <Time><b>Tempo estimado para entrega:</b> {bag.timeMinute} - {bag.timeSeconds}min</Time>
                
            </ResumeContainer>

        </Container>
    )
}
