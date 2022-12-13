import { CardContent } from '../../../../components/CardContent';
import { CardHeader } from '../../../../components/CardHeader';
import { SubHeaderPay } from '../../../../components/SubHeaderPay';
import { useBag } from '../../../../hooks/bag';

import {

    Container,
} from './styles';

export function Compra() {
    const {bag} = useBag();

    return (
        <Container>
            <SubHeaderPay
                title=' - Botijão de 13kg'
                amount={79}
                amountCentus={99}
            />
            <CardHeader
                typeCard={bag.typeCard}
                titleClient='Tonho Gas'
                
                amountCentus={99}
                note={4.8}
                logoName={bag.logoName}
            />
            
            <CardContent />
        </Container>
    )
}