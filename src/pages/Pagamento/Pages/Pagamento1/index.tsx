import { CardsPayment } from '../../../../components/CardsPayment';
import { SubHeaderPay } from '../../../../components/SubHeaderPay';

import {
    Container,
} from './styles';

export function Pagamento1() {
    return (
        <Container>
            <SubHeaderPay
                title='Supergasbras - Botijão de 13kg'
                amount={79}
                amountCentus={99}
            />
            <CardsPayment
                titleName='Crédito'
                img={true}

            />
            <CardsPayment
                titleName='Débito'
                card={true}
                title='Pague na Entrega'
            />
            <CardsPayment
                titleName='Dinheiro'
                diner={true}
                title='Pague na Entrega'
            />

        </Container>
    )
}