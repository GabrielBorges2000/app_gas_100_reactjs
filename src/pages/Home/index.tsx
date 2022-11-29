import { NavLink } from "react-router-dom";
import { Header } from "../../components/Header";
import { StoreCard } from "../../components/StoreCard";
import { useBag } from "../../hooks/bag";
import { Container, } from "./styled";

export function Home() {
  return (
    <Container>
      <Header />
      <StoreCard
        type="orange"
        logoName="SupergasBraz"
        titleStore="Tonho Gás"
        note={4.8}
        timeMinutes={15}
        timeSeconds={30}
        amount={79}
        amountCentus={99}
      />
      <StoreCard

        type="gray"
        logoName="Multimarcas"
        titleStore="Rafinha Gas"
        note={4.8}
        timeMinutes={15}
        timeSeconds={30}
        amount={79}
        amountCentus={99}
      />
      <StoreCard
        type="yellow"
        logoName="COPAGAZ"
        titleStore="Zeca Gas"
        note={4.5}
        timeMinutes={15}
        timeSeconds={30}
        amount={75}
        amountCentus={99}
      />
      <StoreCard
        type="green"
        logoName="ButanoGas"
        titleStore="Gas Brasil"
        note={4.2}
        timeMinutes={20}
        timeSeconds={45}
        amount={69}
        amountCentus={99}
      />
    </Container>
  )
}

