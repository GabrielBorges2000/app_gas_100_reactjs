import { Coins, CreditCard } from 'phosphor-react';
import { ImageContainer } from '../ImageContainer';
import ControlledCheckbox from '../ControlledCheckbox';


import {
    Container,
    Title,
    ButtonCheck,
    ContentContainer,
    TitleName,
    InfoContainer,
} from './styles';
import { useBag } from '../../hooks/bag';

type Props = {
    titlePay?: string;
    typePay: 'Débito' | 'Crédito' | 'Dinheiro';
    img?: boolean;
    card?: boolean;
    diner?: boolean;

}

export function CardsPayment({ typePay, titlePay, img, card, diner }: Props) {
    const { bag, handleUpdateBag } = useBag();

    function handleAdd() {
        handleUpdateBag({
            ...bag,
            typePay: typePay,
        })
    }

    return (
        <Container>
            <InfoContainer>
                <TitleName>{typePay}</TitleName>
                <ContentContainer>
                    {img && <ImageContainer />}
                    {card && <CreditCard size={32} color="#5F9DF7" />}
                    {diner && <Coins size={32} color="#5F9DF7" />}

                    <Title>{titlePay}</Title>
                </ContentContainer>
            </InfoContainer>

            <ButtonCheck onClick={handleAdd}>
                <ControlledCheckbox />
            </ButtonCheck>
        </Container>
    )
}