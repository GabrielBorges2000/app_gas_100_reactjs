import { CardsPayment } from '../../../../components/CardsPayment';
import { SubHeaderPay } from '../../../../components/SubHeaderPay';

import {
    Container,
} from './styles';

export function Pagamento1() {
    return (
        <Container>
            <SubHeaderPay
                title=' - Botijão de 13kg'
                amount={79}
                amountCentus={99}
            />
            <CardsPayment
                titlePay='Crédito'
                img={true}

            />
            <CardsPayment
                titlePay='Débito'
                card={true}
                typePay='Pague na Entrega'
            />
            <CardsPayment
                titlePay='Dinheiro'
                diner={true}
                typePay='Pague na Entrega'
            />

        </Container>
    )
}