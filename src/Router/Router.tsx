import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { Cadastro } from "../pages/Cadastro";
import { Home } from "../pages/Home";
import { Pagamento1 } from "../pages/Pagamento1";

export function Router() {
  return (
    <Routes>
      <Route path="/"  element={<Home/>} />
      <Route path="/Cadastro" element={ <Cadastro/> } />
      <Route path="/Pagamento1" element={ <Pagamento1/> } />

    </Routes>
  )
}