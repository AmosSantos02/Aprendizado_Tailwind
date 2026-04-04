import logoRevOps from "../../assets/images/Logo_Mkt4rev-08 1.png";
import logoMkt from "../../assets/images/LOGO_Mkt4edu-05 2.png";
import { Button } from "../Button";

export const Header = ({ children }) => {
  return (
    <header className="flex justify-between my-7 mx-auto
     w-[362px] lg:w-full lg:px-10 ">
      <div className="flex items-center gap-4 ">
        <img src={logoRevOps} className="w-16 h-[13px]" />
        <img src={logoMkt} className="w-16 h-[13px]" />
      </div>

      <div className="flex flex-col gap-1 lg:hidden">
        <span className="w-7 h-1 bg-brand-purple rounded-full"></span>
        <span className="w-7 h-1 bg-brand-purple rounded-full"></span>
        <span className="w-7 h-1 bg-brand-purple rounded-full"></span>
      </div>

      <Button variant="site" className='hidden lg:flex'>Site</Button>
      
    </header>
  );
};
