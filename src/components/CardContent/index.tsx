import { useState } from 'react';

import Gas from '../../assets/Gas_Cozinha.png'
import { useBag } from '../../hooks/bag';
import { ButtonGas } from '../ButtonGas';
import { Title } from '../Title';

import {
    Container,
    Number,
    GasContainer,
    ButtonContainer,
    Image,
    Button,
    CardContainer

} from './styles';

export function CardContent() {
    const { bag, handleUpdateBag } = useBag();

    const [amount, setAmount] = useState(1);

    function handleAdd() {
        handleUpdateBag({
            ...bag,
            amount: amount
        });
    }

    return (
        <Container>
            <CardContainer>
                <Title
                    titleName={bag.logoName}
                    titleType='Botijão de 13Kg'
                    amount={79}
                    amountCentus={99}
                />
                <ButtonContainer>
                    <ButtonGas
                        onClick={() => (amount - 1 ) > 0 && setAmount(amount - 1)}
                        typeButton={false}
                    />
                    <GasContainer>
                        <Number>{amount}</Number>
                        <Image src={Gas} />
                    </GasContainer>
                    <ButtonGas
                        onClick={() => setAmount(amount + 1)}
                        typeButton={true}
                    />
                </ButtonContainer>
            </CardContainer>

            <Button
                onClick={handleAdd}
            >
                Adicionar item ao carrinho
            </Button>
        </Container>
    )
}
