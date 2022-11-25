import { Check, CheckCircle, Coins, CreditCard } from 'phosphor-react';
import React from 'react';
import { ImageContainer } from '../ImageContainer';
import ControlledCheckbox from './ControlledCheckbox';


import {
    Container,
    Title,
    ButtonCheck,
    ContentContainer,
    TitleName,
    InfoContainer,
} from './styles';

type Props = {
    titleName?: string;
    title?: string;
    img?: boolean;
    card?: boolean;
    diner?: boolean;


}

export function ButtonPay({ title, titleName, img, card, diner }: Props) {
    return (
        <Container>
            <InfoContainer>
                <TitleName>{titleName}</TitleName>
                <ContentContainer>
                    {img && <ImageContainer />}
                    {card && <CreditCard size={32} color="#5F9DF7" />}
                    {diner && <Coins size={32} color="#5F9DF7" />}

                    <Title>{title}</Title>
                </ContentContainer>
            </InfoContainer>

            <ButtonCheck>{/* <Check size={23} /> */}
                <ControlledCheckbox />
            </ButtonCheck>
        </Container>
    )
}