import {
    Container, PropsButton, TitleButton, Button, ButtonContainer, ContainerPage
} from "./styles";
import { CaretLeft, CaretRight } from "phosphor-react";

import { useState } from 'react';
import { TabLoading } from "../../components/TabLoading";
import { Compra } from "./Pages/Compra";
import { Confirmacao } from "./Pages/Confirmacao";
import { Pagamento } from "./Pages/Pagamento";
import { HeaderPay } from "./Components/HeaderPay/HeaderPay";

export function Pagamento1() {
    const [stap, setStap] = useState(0);

    function handleNext(isNext: boolean = true) {
        setStap(isNext ? stap + 1 : stap - 1);
    }
    return (
        <Container>
            {stap === 0 ? <HeaderPay /> : (stap === 1 ? <ContainerPage /> : <ContainerPage />)}

            <TabLoading stap={stap} />

            {stap === 0
                ? <ContainerPage>
                    <Compra />
                    <ButtonContainer>
                        <Button type="submit" onClick={() => handleNext(true)}>
                            {/* <Button type="submit" onClick={() => handleNext(true)}> */}
                            <CaretRight size={32} />
                        </Button>
                        <TitleButton>Next</TitleButton>
                    </ButtonContainer>

                </ContainerPage>

                : (stap === 1
                    ? <ContainerPage>
                        <Pagamento />
                        <PropsButton>
                            <ButtonContainer>
                                <Button type="submit" onClick={() => handleNext(false)}>
                                    <CaretLeft size={32} />

                                </Button>
                                <TitleButton>Back</TitleButton>
                            </ButtonContainer>

                            <ButtonContainer>
                                <Button type="submit" onClick={() => handleNext(true)}>
                                    <CaretRight size={32} />
                                </Button>
                                <TitleButton>Next</TitleButton>
                            </ButtonContainer>
                        </PropsButton>
                    </ContainerPage>
                    : <ContainerPage>
                        <Confirmacao />
                        <PropsButton>
                            <ButtonContainer>
                                <Button type="submit" onClick={() => handleNext(false)}>
                                    <CaretLeft size={32} />

                                </Button>
                                <TitleButton>Back</TitleButton>
                            </ButtonContainer>

                            <ButtonContainer>
                                <Button type="submit" onClick={() => handleNext(true)}>
                                    <CaretRight size={32} />
                                </Button>
                                <TitleButton>Next</TitleButton>
                            </ButtonContainer>
                        </PropsButton>
                    </ContainerPage>
                )
            }
        </Container>
    )
}