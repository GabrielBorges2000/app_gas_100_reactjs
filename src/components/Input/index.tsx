import { InputHTMLAttributes } from 'react';

import {
    Container,
    InputContent
} from './styles';

type Props = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    widthValue?: number;
}

export function Input({ label, widthValue, ...rest }: Props) {
    console.log("widthValue: ", widthValue);
    return (
        <Container>
            {/* {!!label &&
                <strong>{label}</strong>
            } */}

            <InputContent widthValue={widthValue}>
                <input
                    {...rest}
                    placeholder={label}
                />
            </InputContent>
        </Container>
    )
}