import { Button } from "../Button";
import { Texto } from "../Textos";
import fotoFeliz from "../../assets/images/foto.png";

export const Descricao = ({ children, className = "" }) => {
  return (
    <div  className="w-full flex flex-col bg-linear-to-r from-brand-purple to-brand-pink gap-3.5 items-center">
      <div className="flex flex-col p-10 gap-6">
        <Texto type="h1" color="white">
          Empreendedorismo digital sem medo!
        </Texto>
        <Texto type="desc">
          Ingressar no universo digital pode parecer assustador, mas não se
          preocupe! Com o passo a passo ideal você encontra todas as dicas
          necessárias para começar a vender seus produtos ou serviços na
          internet.
        </Texto>
        <Texto type="desc">
          Faça seu negócio expandir por meio do empreendedorismo digital.
          Melhore seus resultados por meio das estratégias do mundo online.
        </Texto>

        <Button variant="form" className="font-graphik-bold text-lg">Baixe seu e-book!</Button>
      </div>
      <img src={fotoFeliz} className="w-[431px] h-[276px]" />
    </div>
  );
};
