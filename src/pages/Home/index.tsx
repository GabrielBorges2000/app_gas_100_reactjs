import { Header } from "../../components/Header";
import { StoreCard } from "../../components/StoreCard";
import { Container,} from "./styled";

export function Home() {
  return (
    <Container>
      <Header />
      <StoreCard />
    </Container>
  )
}