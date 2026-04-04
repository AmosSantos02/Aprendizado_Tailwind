import logoRevOps from "../../assets/images/Logo_Mkt4rev-08 1.png";
import logoMkt from "../../assets/images/LOGO_Mkt4edu-05 2.png";
import { Button } from "../Button";

export const Header = ({ children }) => {
  return (
    <header className="flex my-7 mx-auto w-[362px] lg:w-full lg:px-28 lg:mx-0">
      <div className="flex items-center gap-4 ">
        <img
          src={logoRevOps}
          className="w-16 h-[13px] lg:w-[119px] lg:h-[26px]"
        />
        <img src={logoMkt} className="w-16 h-[13px] lg:w-[119px] lg:h-[26px]" />
      </div>

      <div className="flex flex-col gap-1 ml-auto lg:hidden">
        <span className="w-7 h-1 bg-brand-purple rounded-full"></span>
        <span className="w-7 h-1 bg-brand-purple rounded-full"></span>
        <span className="w-7 h-1 bg-brand-purple rounded-full"></span>
      </div>

      <Button variant="site" className="hidden lg:flex ml-auto">
        Site
      </Button>
    </header>
  );
};
