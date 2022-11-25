import React from 'react';
import { SubHeaderPay } from '../../Components/SubHeaderPAy';

import {
    Container,
} from './styles';

export function Compra() {
    return (
        <Container>
            <SubHeaderPay
                title='Supergasbras - Botijão de 13kg'
                quantidade={1}
                amount={79}
                amountCentus={99}
            />
        </Container>
    )
}