import { CaretLeft, Question } from 'phosphor-react';
import React from 'react';

import {
    Container,
    BackButton,
    Title,
    QuestionButton,
} from './styles';

export function HeaderPay() {
    return (
        <Container>
            <BackButton>
                <CaretLeft size={32} />
            </BackButton>
            <Title>Selecionar Produtos</Title>
            <QuestionButton>
                <Question size={24} id="lblQuestion" />
            </QuestionButton>
        </Container>
    )
}