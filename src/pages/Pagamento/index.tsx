import {
    Container, PropsButton, TitleButton, Button, ButtonContainer, ContainerPage, FinalButton
} from "./styles";
import { CaretLeft, CaretRight } from "phosphor-react";

import { useState } from 'react';
import { TabLoading } from "../../components/TabLoading";
import { Compra } from "./Pages/Compra";
import { Confirmacao } from "./Pages/Confirmacao";
import { HeaderPay } from "../../components/HeaderPay";
import { Pagamento1 } from "./Pages/Pagamento1";
import { useBag } from "../../hooks/bag";
import { NavLink } from "react-router-dom";

export function Pagamento() {
    const { handleClearBag } = useBag();

    function handleClear() {
        handleClearBag();
    }



    const [stap, setStap] = useState(0);

    function handleNext(isNext: boolean = true) {
        setStap(isNext ? stap + 1 : stap - 1);
    }
    return (
        <Container>
            {stap === 0 ?
                <HeaderPay
                    back={true}
                    option={true}
                    title="Selecionar Produto"
                />
                : (stap === 1 ?
                    <HeaderPay
                        backpay={true}
                        option={true}
                        title="Metodo de Pagamento"
                    />
                    : <ContainerPage />
                )}

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
                        <Pagamento1 />
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
                        <NavLink to="/">
                            <FinalButton>
                                <PropsButton>
                                    <ButtonContainer>
                                        <Button type="submit" onClick={handleClearBag} >
                                            <CaretRight size={32} />
                                        </Button>
                                        <TitleButton>Next</TitleButton>
                                    </ButtonContainer>
                                </PropsButton>
                            </FinalButton>
                        </NavLink>

                    </ContainerPage>
                )
            }
        </Container>
    )
}