import seloHub from "../../assets/images/Group(1).png";
import seloHubElite from "../../assets/images/Group(3).png";
import seloGoogle from "../../assets/images/Group.png";
import iconeInsta from "../../assets/icon/Redes Sociais_Instagram.png";
import iconeYoutube from "../../assets/icon/Redes Sociais_Youtube.png";
import iconeFace from "../../assets/icon/Redes Sociais_Facebook.png";
import iconeBalao from "../../assets/icon/Redes Sociais_Blog.png";
import iconeLinkedin from "../../assets/icon/Redes Sociais_Linkedin.png";
import iconeTiktok from "../../assets/icon/Redes Sociais_Tiktok.png";
import iconeTwitter from "../../assets/icon/Redes Sociais_Twitter.png";
import iconeNet from "../../assets/icon/Redes Sociais_Site.png";
import logoRevops from "../../assets/images/Logo_Mkt4rev-08 1.png";
import { Texto } from "../Textos";

export const Rodape = ({ children }) => {
    return (
        <div>
            <div className="mb-[122px] lg:mb-0 lg:flex lg:mx-auto lg:w-full lg:max-w-[1230px] h-14">
                <div className=" w-[365px] mx-auto flex gap-8 justify-center items-center">
                    <img src={seloGoogle} />
                    <img src={seloHubElite} />
                    <img src={seloHub} />
                </div>
                <div className="w-[385px] mx-auto mt-10 flex justify-center gap-4 lg:mt-0">
                    <img src={iconeInsta} />
                    <img src={iconeYoutube} />
                    <img src={iconeFace} />
                    <img src={iconeBalao} />
                    <img src={iconeLinkedin} />
                    <img src={iconeTiktok} />
                    <img src={iconeTwitter} />
                    <img src={iconeNet} />
                </div>
            </div>
            <div className="w-72 h-14 mb-[46px] mx-auto mt-[3.625rem] flex flex-col items-center justify-center gap-3">
                <img src={logoRevops} className="w-[6.625rem] brightness-0" />
                <Texto type="desc-card" className="text-sm">
                    Mkt4Edu 2023 ® All rights reserved.
                </Texto>
            </div>
        </div>
    );
};
