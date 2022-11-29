import { useState } from 'react';
import { CaretLeft, Question } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

import {
    Container,
    BackButton,
    Title,
    QuestionButton,
} from './styles';

type Props = {
    title?: string;
    back?: boolean;
    backpay?: boolean;
    option?: boolean;
    to?: boolean;
}

export function HeaderPay({ title, back, backpay, option}: Props) {

    return (
        <Container>
            <NavLink to='/cadastroName'>
                <BackButton>
                    {back === true ?   <CaretLeft size={32} /> : <div />}
                </BackButton>
            </NavLink>
            <NavLink to='/pagamento'>
                <BackButton>
                    {backpay === true ?   <CaretLeft size={32} /> : <div />}
                </BackButton>
            </NavLink>
            <Title>{title}</Title>
            <QuestionButton>
                {option === true ? <Question size={24} id="lblQuestion" /> : <div />}

            </QuestionButton>
        </Container>
    )
}