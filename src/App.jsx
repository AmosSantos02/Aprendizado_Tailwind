import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Header } from "./components/menu";
import { Formulario } from "./components/formulario";
import { Texto } from "./components/Textos";
import { Descricao } from "./components/Descrição";
import { Card } from "./components/Cards";
import { Rodape } from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <Formulario />
      <Descricao />
      <Card></Card>
      <Rodape></Rodape>     
    </>
  );
}

export default App;
