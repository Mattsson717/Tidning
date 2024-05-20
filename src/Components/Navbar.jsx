import { useState } from "react"
import { Link } from "react-scroll"
import {FaTimes} from "react-icons/fa"
import {CiMenuFries} from "react-icons/ci"

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click);
    }
    

    const content = <>
     <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
       <ul className="text-center text-xl p-20">
         <Link spy={true} smooth={true} to="About"><li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer">Om oss</li></Link>
         <Link spy={true} smooth={true} to="Media"><li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer">Media</li></Link>
         <Link spy={true} smooth={true} to="Magazine"><li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer">Nyheter</li></Link>
         <Link spy={true} smooth={true} to="Music"><li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer">Musik</li></Link>
         <Link spy={true} smooth={true} to="Contact"><li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer">Kontakt</li></Link>
       </ul>
     </div>
    </>
  return (
    <nav className="fixed top-0 z-10 bg-slate-900 w-full">
        <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 border-b border-slate-800">
            <div className="flex items-center flex-1">
                <Link spy={true} smooth={true} to="Home"><span className="text-3xl font-bold cursor-pointer">Stjärnan</span></Link>
            </div>
            <div className="lg:flex md:flex lg:flex-1 items center justify-end font-normal hidden">
        <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px] ">
                <Link spy={true} smooth={true} to="About"><li className="hover:text-[#1DB954] transition border-slate-900 hover:border-[#1DB954] cursor-pointer">Om oss</li></Link>
                <Link spy={true} smooth={true} to="Media"><li className="hover:text-[#1DB954] transition border-slate-900 hover:border-[#1DB954] cursor-pointer">Media</li></Link>
                <Link spy={true} smooth={true} to="Magazine"><li className="hover:text-[#1DB954] transition border-slate-900 hover:border-[#1DB954] cursor-pointer">Nyheter</li></Link>
                <Link spy={true} smooth={true} to="Music"><li className="hover:text-[#1DB954] transition border-slate-900 hover:border-[#1DB954] cursor-pointer">Musik</li></Link>
                <Link spy={true} smooth={true} to="Contact"><li className="hover:text-[#1DB954] transition border-slate-900 hover:border-[#1DB954] cursor-pointer">Kontakt</li></Link>
                    </ul>
                </div>
            </div>
            <div>
                {click && content}
            </div>
            <button className="block sm:hidden transition " onClick={handleClick}>{click ? <FaTimes/> : <CiMenuFries/>}</button>
        </div>
    </nav>
  )
}

export default Navbar