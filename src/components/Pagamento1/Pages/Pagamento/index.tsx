import React from 'react';
import { ButtonPay } from '../../Components/ButtonPay';
import { ButtonConfirm } from '../../Components/ButtonPay/ButtonConfirm';
import { SubHeaderPay } from '../../Components/SubHeaderPAy';

import {
    Container,
} from './styles';

export function Pagamento() {
    return (
        <Container>
            <SubHeaderPay
                title='Supergasbras - Botijão de 13kg'
                quantidade={1}
                amount={79}
                amountCentus={99}
            />
            <ButtonPay 
                titleName='Crédito'
                img={true}
            />
            <ButtonPay 
                titleName='Débito'
                card={true}
                title='Pague na Entrega'
            />
            <ButtonPay 
                titleName='Dinheiro'
                diner={true}
                title='Pague na Entrega'
            />

            <ButtonConfirm />
        </Container>
    )
}