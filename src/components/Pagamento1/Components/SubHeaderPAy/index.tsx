import { 
    Container,
    TitleNumber,
    Title,
    TitleAmount,
 } from "./styles";

 type Props = {
    quantidade?: number;
    title?: string;
    amount?: number;
    amountCentus?: number;

 }

export function SubHeaderPay({ amount, amountCentus, quantidade, title} : Props){
    return(
        <Container>
            <TitleNumber>{quantidade}</TitleNumber>
            <Title>{title}</Title>
            <TitleAmount>R$<b>{amount},{amountCentus}</b></TitleAmount>
        </Container>
    )
}