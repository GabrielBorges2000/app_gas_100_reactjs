import { useState } from 'react';

import Gas from '../../assets/Gas_Cozinha.png'
import { ButtonGas } from '../ButtonGas';
import { Title } from '../Title';

import {
    Container,
    Number,
    GasContainer,
    ButtonContainer

} from './styles';

export function CardContent() {
    const [amount, setAmount] = useState(1);

    return (
        <Container>
            <Title
                titleName='SupergasBras'
                titleType='Botijão de 13Kg'
                amount={79}
                amountCentus={99}
            />
            <ButtonContainer>
                <ButtonGas
                    onClick={() => (amount - 1) > 0 && setAmount(amount - 1)}
                    typeButton={false}
                />
                <GasContainer>
                    <Number>{amount}</Number>
                    <img src={Gas} />
                </GasContainer>
                <ButtonGas
                    onClick={() => setAmount(amount + 1)}
                    typeButton={true}
                />
            </ButtonContainer>
        </Container>
    )
}
