import { Check, Coins, CreditCard } from 'phosphor-react';
import React from 'react';
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
    typePay?: string;
    img?: boolean;
    card?: boolean;
    diner?: boolean;

}

export function CardsPayment({ typePay, titlePay, img, card, diner }: Props) {
    const { bag, handleUpdateBag } = useBag();


    // function handleAdd() {
    //     handleUpdateBag({
    //         ...bag,
    //         titlePay: titlePay,
    //     })
    // }

    return (
        <Container>
            <InfoContainer>
                <TitleName>{titlePay}</TitleName>
                <ContentContainer>
                    {img && <ImageContainer />}
                    {card && <CreditCard size={32} color="#5F9DF7" />}
                    {diner && <Coins size={32} color="#5F9DF7" />}

                    <Title>{typePay}</Title>
                </ContentContainer>
            </InfoContainer>

            <ButtonCheck /* onClick={handleAdd} */>
                <ControlledCheckbox />
            </ButtonCheck>
        </Container>
    )
}