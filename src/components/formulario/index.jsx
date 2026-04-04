import { Texto } from "../Textos";
import { Input } from "../Input";
import { Button } from "../Button";
import fotoEscondida from "../../assets/images/mockup.png";

export const Formulario = ({ children }) => {
  return (
    <div className="mx-auto flex flex-col items-center max-w-[396px] lg:flex-row">
      <div>
        <Texto type="h1" color="roxo">
          Sua empresa no digital: guia de como começar a empreender na internet
        </Texto>

        <Texto type="h1-menor" className="mt-7">
          Receba seu e-book!
        </Texto>

        <Input type="text" placeholder="Nome*" />
        <Input type="text" placeholder="Sobrenome*" />
        <Input type="email" placeholder="E-mail*" />
        <Input type="tel" placeholder="Telefone*" />
        <div className="flex items-center gap-2.5 mt-5 mb-1">
          <input type="checkbox" className="w-4 h-4 cursor-pointer" />
          <Texto type="termo">
            Eu concordo com a Política de Privacidade da Mktedu.*
          </Texto>
        </div>
        <Button variant="form">Baixar meu e-book</Button>
      </div>
      <img
        src={fotoEscondida}
        alt=""
        className="max-w-[310px] max-h-[401px] mt-5"
      />
    </div>
  );
};
