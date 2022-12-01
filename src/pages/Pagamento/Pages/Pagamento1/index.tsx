import { CardsPayment } from '../../../../components/CardsPayment';
import { SubHeaderPay } from '../../../../components/SubHeaderPay';

import {
    Button,
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
                typePay='Crédito'
                img={true}

            />
            <CardsPayment
                typePay='Débito'
                titlePay='Pague na Entrega'
                card={true}
                
            />
            <CardsPayment
                titlePay='Pague na Entrega'
                diner={true}
                typePay='Dinheiro'
            />

            

        </Container>
    )
}