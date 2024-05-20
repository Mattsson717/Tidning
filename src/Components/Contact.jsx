import { useEffect } from "react"
import Aos from "aos"

const Contact = () => {
    
    useEffect(()=> {
        Aos.init({
            easing: 'ease-in-out-quart',
            delay: 0,
            duration: 750
        }, [])
    } )
  return (
    <div id="Contact" className="p-4 lg:p-20 flex flex-col items-center justify-center">
        <h1 data-aos="fade-left" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-[#1DB954]">Kontakt</h1>
        <form action="" className="flex flex-col gap-2 lg:w-1/2">
            <div className="lg:flex gap-9 ">
                <input className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-[#1DB954] b_glow text-xl text-slate-500" placeholder="Namn" type="text" />
                <input className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-[#1DB954] b_glow text-xl text-slate-500" placeholder="E-mail" type="email" />
            </div>
            <textarea className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-[#1DB954] b_glow text-xl text-slate-500" placeholder="Skriv här..." name="" id="" cols="20" rows="10"></textarea>
            <button className="neno-button shadow-xl hover:shadow-[#1DB954] text-white border-2 border-[#1DB954] bg-[#1DB954] hover:bg-slate-900 rounded-lg py-4 px-8 my-6 uppercase relative overflow-hidden b_glow text-xl text-bold" type="submit">Skicka</button>
        </form>
    </div>
  )
}

export default Contact