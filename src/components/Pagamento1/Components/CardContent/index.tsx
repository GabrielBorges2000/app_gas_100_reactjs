import { useState } from 'react';

import Gas from '../../assets/Gas_Cozinha.png'
import { Button } from './components/Button';
import { Title } from './components/Title';

import {
    Container,
    Number,
    GasContainer,
    ButtonContainer

} from './styles';

export function CardContent() {


    return (
        <Container>
            <Title
                titleName='SupergasBras'
                titleType='Botijão de 13Kg'
                amount={79}
                amountCentus={99}
            />
            <ButtonContainer>
                <Button

                    type={false}
                />
                <GasContainer>
                    <Number>1</Number>
                    <img src={Gas} />
                </GasContainer>
                <Button

                    type={true}
                />
            </ButtonContainer>
        </Container>
    )
}
