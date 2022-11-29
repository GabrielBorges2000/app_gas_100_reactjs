import { ButtonHTMLAttributes } from 'react';
import { Minus, Plus } from 'phosphor-react';

import {
    Container,
} from './styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    typeButton: boolean;
}

export function ButtonGas({ typeButton, ...rest }: Props) {
    return (
        <Container {...rest}>
            {typeButton === true ? <Plus size={28} /> : <Minus size={28} />}
        </Container>
    )
}