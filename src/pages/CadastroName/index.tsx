import { CaretLeft, CaretRight } from 'phosphor-react';
import { useState } from 'react';
import Gas from '../../assets/Gas.png'

import {
    Button,
    Container, Image, ButtonProps, ImageContainer, InputName, Title, Card, ButtonContainer, TitleButton,
} from './styles';
import { NavLink } from 'react-router-dom';
import { useBag } from '../../hooks/bag';
import { StoreCard } from '../../components/StoreCard';



export function CadastroName() {
    const { bag, handleUpdateBag } = useBag();
    const [name, setName] = useState('');

    function handleNext() {
        handleUpdateBag({
            ...bag,
            name: name,
        })
    }

    return (
        <Container>
            <ImageContainer>
                <Image src={Gas} />
            </ImageContainer>

            <Card>
                <StoreCard
                    typeCard={bag.typeCard}
                    logoName={bag.logoName}
                    titleStore={bag.titleStore}
                    note={bag.note}
                    timeMinutes={bag.timeMinute}
                    timeSeconds={bag.timeSeconds}
                    valor={bag.valor}
                />
            </Card>

            <InputName
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Nome"
                maxLength={30}
                minLength={1}
                type="Text"
            />

            <Title> Usaremos seu nome para informá-lo(a) </Title>
            <Title> sobre sua entrega.</Title>
            <ButtonProps>
                <ButtonContainer>
                    <NavLink to="/Cadastro">
                        <Button type="button">
                            <CaretLeft size={32} />
                        </Button>
                    </NavLink>
                    <TitleButton>Voltar</TitleButton>
                </ButtonContainer>

                <ButtonContainer>
                    <NavLink to="/Pagamento">
                        <Button type="submit" onClick={handleNext}>
                            <CaretRight size={32} />
                        </Button>
                    </NavLink>
                    <TitleButton>Próximo</TitleButton>
                </ButtonContainer>
            </ButtonProps>

        </Container>
    )
}