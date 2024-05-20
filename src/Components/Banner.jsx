import { TbBrandSpotifyFilled } from "react-icons/tb";
import { ImYoutube2 } from "react-icons/im";
import { TiSocialInstagram } from "react-icons/ti";
import img from "../assets/majoras.png"
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Banner = () => {
    useEffect(()=> {
        Aos.init({
            easing: 'ease-in-out-quart',
            delay: 0,
            duration: 750
        }, [])
    } )
  return (
    <div id="Home" className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center ">
        <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
            <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal uppercase">Välkommen till <span className="text-[#1DB954]">Stjärnan</span></h1>
            <p data-aos="fade-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className="flex mt-8 gap-2 ">
                <div className="flex items-center justify-center ">
                    <div className="flex space-x-2">
                        <a href="" className="text-[#1DB954] hover:text-[#1DB954] rounded-full glow p-2">
                            <TbBrandSpotifyFilled className="text-[28px]"/>
                        </a>
                        <a href="" className="text-[#1DB954] hover:text-[#1DB954] rounded-full glow p-2">
                            <ImYoutube2 className="text-[28px]"/>
                        </a>
                        <a href="" className="text-[#1DB954] hover:text-[#1DB954] rounded-full glow p-2">
                            <TiSocialInstagram className="text-[28px]"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <img data-aos="fade-up" src={img} width={290} height={290} className="rounded-full border-2 p-1 border-[#1DB954] img_glow" alt=""/>
    </div>
  )
}

export default Banner