import { Texto } from "../Textos";
import { Input } from "../Input";
import { Button } from "../Button";
import fotoEscondida from "../../assets/images/mockup.png";

export const Formulario = ({ children }) => {
  return (
    <div className="mx-auto flex flex-col items-center max-w-[396px] lg:flex-row lg:justify-center lg:pl-[130px] ">
      <div className="  max-w-[580px] lg:pr-7 lg:w-[580px] lg:h-[575px]">
        <Texto type="h1" color="roxo" className="text-4xl">
          Sua empresa no digital: guia de como começar a empreender na internet
        </Texto>

        <Texto type="h1-menor" className="mt-7 ">
          Receba seu e-book!
        </Texto>

        <Input type="text" placeholder="Nome*" />
        <Input type="text" placeholder="Sobrenome*" />
        <Input type="email" placeholder="E-mail*" />
        <Input type="tel" placeholder="Telefone*" />
        <div className="flex items-center gap-2.5 mt-5 mb-1">
          <input
            type="checkbox"
            className="w-4 h-4 cursor-pointer lg:w-2.5 lg:h-2.5"
          />
          <Texto type="termo" className="text-xs">
            Eu concordo com a Política de Privacidade da Mktedu.*
          </Texto>
        </div>
        <Button variant="form">Baixar meu e-book</Button>
      </div>
      <img
        src={fotoEscondida}
        alt=""
        className="max-w-[310px] max-h-[401px] mt-5 lg:max-w-none lg:max-h-none lg:w-[592px] lg:h-[767px] lg:mt-0"
      />
    </div>
  );
};
