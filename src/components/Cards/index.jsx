import { Texto } from "../Textos";
import { Button } from "../Button";
import iconeFoguete from "../../assets/icon/rocket_icon.svg";
import iconeDash from "../../assets/icon/dash_icon.svg";
import iconeNet from "../../assets/icon/internet_icon.svg";
import iconeLupa from "../../assets/icon/up_search_icon.svg";
import iconeEscudo from "../../assets/icon/security_icon.svg";
import iconeMidias from "../../assets/icon/Vector.png";

export const Card = ({ children }) => {
  return (
    <div className="flex flex-col items-center">
      <Texto type="h3" className="p-5 mt-10">
        O que você vai ver neste e-book?
      </Texto>

      <div className="flex flex-col justify-evenly items-center bg-gray-card mx-11 text-center w-[21.5rem] h-[26.8125rem]">
        <img src={iconeFoguete} className="w-[4.9375rem] " />
        <Texto type="h3" className="px-1 text-[22px]">
          O conceito de Empreendedorismo Digital
        </Texto>
        <Texto type="desc-card">
          Entenda, desde o começo, o que é vender na internet e por que
          empreender online pode ser valioso para o seu neǵocio.
        </Texto>
      </div>
      <div className="flex flex-col justify-evenly items-center bg-gray-card mx-11 text-center w-[21.5rem] h-[26.8125rem] mt-15">
        <img src={iconeDash} className="w-[4.9375rem]" />
        <Texto type="h3" className="px-1 text-[22px]">
          O passo a passo para vender na internet
        </Texto>
        <Texto type="desc-card">
          Confira estratégias e dicas de como usar o inbound marketing para se
          posicionar e empreender no digital de maneira prática e assertiva.
        </Texto>
      </div>
      <div className="flex flex-col justify-evenly items-center bg-gray-card mx-11 text-center w-[21.5rem] h-[26.8125rem] mt-15">
        <img src={iconeNet} className="w-[4.9375rem]" />
        <Texto type="h3" className="px-1 text-[22px]">
          Quais ferramentas usar no mundo digital
        </Texto>
        <Texto type="desc-card">
          Saiba escolher os melhores canais de comunicação para começar a
          empreender na internet e ver o seu negócio bombar nos meios online.
        </Texto>
      </div>
      <div className="flex flex-col justify-evenly items-center bg-gray-card mx-11 text-center w-[21.5rem] h-[26.8125rem] mt-15">
        <img src={iconeLupa} className="w-[4.9375rem]" />
        <Texto type="h3" className="px-1 text-[22px]">
          Como fazer análise de dados das suas estratégias
        </Texto>
        <Texto type="desc-card">
          Aprenda a ter inteligência analítica para mensurar seus resultados e
          aplicar as mudanças necessárias para fazer seu negócio crescer.
        </Texto>
      </div>
      <div className="flex flex-col justify-evenly items-center bg-gray-card mx-11 text-center w-[21.5rem] h-[26.8125rem] mt-15">
        <img src={iconeEscudo} className="w-[4.9375rem]" />
        <Texto type="h3" className="px-1 text-[22px]">
          A necessidade de políticas de privacidade
        </Texto>
        <Texto type="desc-card">
          Entenda como manter a credibilidade e autoridade da sua empresa sendo
          transparente na coleta e proteção de dados pessoais dos seus
          consumidores e clientes
        </Texto>
      </div>
      <div className="flex flex-col justify-evenly items-center bg-gray-card mx-11 text-center w-[21.5rem] h-[26.8125rem] mt-15 mb-15">
        <img src={iconeMidias} className="w-[4.9375rem]" />
        <Texto type="h3" className="px-1 text-[22px]">
          A importância do comportamento digital
        </Texto>
        <Texto type="desc-card">
          Saiba, no detalhe, como se portar, pronunciar e se posicionar
          socialmente no mundo online para encantar seus clientes e aumentar
          suas vendas.
        </Texto>
      </div>

      <Button variant="baixarAgora" className="mb-10">Baixe agora!</Button>
    </div>
  );
};
