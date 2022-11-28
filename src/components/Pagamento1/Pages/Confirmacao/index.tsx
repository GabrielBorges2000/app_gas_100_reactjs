import React from 'react';
import { ConfirmacaoDados } from '../../Components/ConfirmacaoDados';

import {
Container,
} from './styles';

export function Confirmacao() {
    return (
        <Container>
            <ConfirmacaoDados
            gasType='SupergasBras'
            store='Tonho Gas'
            location='Praça Miguel Ortega, 340 - Pq. Assunção'
            name='Gabriel Borges Oliveira'
            pay='Crédito'
            value={79}
            valueCentus={99}
            timeMinute={15}
            timeSeconds={30}
            phoneDDD={11}
            phonePrimary={93435}
            phoneSecundary={4029}
            />
        </Container>
    )
}