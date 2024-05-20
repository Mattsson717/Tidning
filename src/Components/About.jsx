import img from "../assets/4gNTZOu.jpeg";
import { useEffect } from "react";
import Aos from "aos";

const About = () => {
    useEffect(()=> {
        Aos.init({
            easing: 'ease-in-out-quart',
            delay: 0,
            duration: 750
        }, [])
    } )
  return (
        <div id="About" className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center ">
       <img data-aos="fade-down" src={img} width={290} height={290} className="rounded border-2 p-1 border-[#1DB954] img_glow" alt=""/>
        <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
            <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal uppercase text-[#1DB954]">Om oss</h1>
            <p data-aos="fade-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className="flex mt-8 gap-2 ">
                <div className="flex items-center justify-center ">
                    <div className="flex space-x-2">
                        <button className="neno-button shadow-xl hover:shadow-[#1DB954] text-white border-2 hover:bg-[#1DB954] border-[#1DB954] rounded-lg py-4 px-8 uppercase relative overflow-hidden ">Fortsätt</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About