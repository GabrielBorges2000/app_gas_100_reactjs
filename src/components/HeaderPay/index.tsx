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
    option?: boolean;
}

export function HeaderPay({ title, back, option }: Props) {
    const [stap, setStap] = useState(0);

    function handleNext(isNext: boolean = true) {
        setStap(isNext ? stap + 1 : stap - 1);
    }

    return (
        <Container>
            <NavLink to='/cadastroName' >
                <BackButton >
                    {back === true ? <CaretLeft size={32} /> : <div/>}
                </BackButton>
            </NavLink>
            <Title>{title}</Title>
            <QuestionButton>
                {option === true ? <Question size={24} id="lblQuestion" /> : <div />}

            </QuestionButton>
        </Container>
    )
}