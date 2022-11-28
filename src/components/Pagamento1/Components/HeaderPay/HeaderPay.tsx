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
    option?: boolean;
    to?: boolean;
}

export function HeaderPay({ title, back, option, to }: Props) {

    return (
        <Container>
            <NavLink to='/cadastro'>
                <BackButton>
                    {back === true ?   <CaretLeft size={32} /> : <div />}
                </BackButton>
            </NavLink>
            <Title>{title}</Title>
            <QuestionButton>
                {option === true ? <Question size={24} id="lblQuestion" /> : <div />}

            </QuestionButton>
        </Container>
    )
}