import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { Cadastro } from "../pages/Cadastro";
import { CadastroName } from "../pages/CadastroName";
import { Home } from "../pages/Home";
import { Pagamento } from "../pages/Pagamento";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Cadastro" element={<Cadastro />} />
      <Route path="/CadastroName" element={<CadastroName />} />
      <Route path="/Pagamento" element={<Pagamento />} />

    </Routes>
  )
}