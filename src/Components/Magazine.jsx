import img from "../assets/horror.png"
import { useEffect } from "react"
import Aos from "aos"

const Magazine = () => {
    useEffect(()=> {
        Aos.init({
            easing: 'ease-in-out-quart',
            delay: 0,
            duration: 750
        }, [])
    } )
  return (
    <div id="Magazine" className="p-20 flex flex-col items-center justify-center ">
        <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-[#1DB954]">Nyheter</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">
            <img data-aos="fade-up" height={250} width={250} src={img} className="text-[26px] flex items-center justify-center rounded-3xl p-2 border-2 border-[#1DB954] b_glow" alt="" />
            <img data-aos="fade-down" height={250} width={250} src={img} className="text-[26px] flex items-center justify-center rounded-3xl p-2 border-2 border-[#1DB954] b_glow" alt="" />
            <img data-aos="fade-up" height={250} width={250} src={img} className="text-[26px] flex items-center justify-center rounded-3xl p-2 border-2 border-[#1DB954] b_glow" alt="" />
            <img data-aos="fade-down" height={250} width={250} src={img} className="text-[26px] flex items-center justify-center rounded-3xl p-2 border-2 border-[#1DB954] b_glow" alt="" />
        </div>
    </div>
  )
}

export default Magazine