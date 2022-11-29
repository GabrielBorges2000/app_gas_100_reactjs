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
            <Title>{title}</Title>
            <TitleAmount>R$<b>{amount},{amountCentus}</b></TitleAmount>
        </Container>
    )
}