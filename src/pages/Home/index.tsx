import { Header } from "../../components/Header";
import { StoreCard } from "../../components/StoreCard";
import { Container, } from "./styled";

export function Home() {
  return (
    <Container>
      <Header />
      <StoreCard
      logoName="SupergasBraz"
        titleClient="Tonho Gás"
        note={4.8}
        timeMinutes={15}
        timeSeconds={30}
        amount={79}
        amountCentus={99}
      />
    </Container>
  )
}

