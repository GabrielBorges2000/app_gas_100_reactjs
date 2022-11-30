import { useBag } from "../../hooks/bag";
import {
    Container, Title, TitleAmount, TitleNumber,

} from "./styles";

type Props = {
    title?: string;
    amount?: number;
    amountCentus?: number;

}

export function SubHeaderPay({ amount, amountCentus, title }: Props) {
    const { bag } = useBag();

    return (
        <Container>
            <TitleNumber>{bag.amount}</TitleNumber>
            <Title>{bag.logoName}{title}</Title>
            <TitleAmount>R$<b>{bag.valor}</b>,{bag.valueCentus}</TitleAmount>
        </Container>
    )
}