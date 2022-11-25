import { CaretLeft, Question } from 'phosphor-react';
import React from 'react';

import {
    Container,
    BackButton,
    Title,
    QuestionButton,
} from './styles';

type Props = {
    title: string;
}

export function HeaderPay({title} : Props) {
    return (
        <Container>
            <BackButton>
                <CaretLeft size={32} />
            </BackButton>
            <Title>{title}</Title>
            <QuestionButton>
                <Question size={24} id="lblQuestion" />
            </QuestionButton>
        </Container>
    )
}