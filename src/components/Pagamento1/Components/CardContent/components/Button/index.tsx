import { Minus, Plus } from 'phosphor-react';
import React from 'react';

import {
Container,
} from './styles';

type Props = {
    type: boolean
}

export function Button({type} : Props) {
    return (
        <Container>
            {type === true ? <Plus size={28} /> : <Minus size={28} />}
        </Container>
    )
}