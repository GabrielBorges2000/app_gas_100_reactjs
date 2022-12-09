import { Header } from "../../components/Header";
import { StoreCard } from "../../components/StoreCard";
import { Container, } from "./styled";

export function Home() {
  return (
    <Container>
      <Header />
      <StoreCard
        typeCard="orange"
        logoName="SupergasBraz"
        titleStore="Tonho Gás"
        note={4.8}
        timeMinutes={15}
        timeSeconds={30}
        valor={79}
      />
      <StoreCard

        typeCard="gray"
        logoName="Multimarcas"
        titleStore="Rafinha Gas"
        note={4.8}
        timeMinutes={15}
        timeSeconds={30}
        valor={79}
      />
      <StoreCard
        typeCard="yellow"
        logoName="COPAGAZ"
        titleStore="Zeca Gas"
        note={4.5}
        timeMinutes={15}
        timeSeconds={30}
        valor={79}
      />
      <StoreCard
        typeCard="green"
        logoName="ButanoGas"
        titleStore="Gas Brasil"
        note={4.2}
        timeMinutes={20}
        timeSeconds={45}
        valor={79}
      />
    </Container>
  )
}

