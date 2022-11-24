import { 
    Container,
    TitleNumber,
    Title,
    TitleAmount,
 } from "./styles";

export function SubHeaderPay(){
    return(
        <Container>
            <TitleNumber>1</TitleNumber>
            <Title>Supergasbras - Botijão de 13kg</Title>
            <TitleAmount>R$<b>79,99</b></TitleAmount>
        </Container>
    )
}