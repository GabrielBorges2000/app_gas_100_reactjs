import { useState } from 'react';
import { CardContent } from '../../Components/CardContent';
import { CardHeader } from '../../Components/CardHeader';
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
            <CardHeader
                titleClient='Tonho Gas'
                amount={79}
                amountCentus={99}
                note={4.8}
                timeMinutes={15}
                timeSeconds={30}
                logoName='SupergasBras'
            />
            <CardContent

            />
        </Container>
    )
}