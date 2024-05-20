import { TbBrandSpotifyFilled } from "react-icons/tb";
import { ImYoutube2 } from "react-icons/im";
import { TiSocialInstagram } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="mb-4 md:mb-0">
                <span className="text-3xl font-semibold text-[#1DB954] py-2 uppercase">Logo</span>
                <p className="text-[16px] my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. sunt!</p>
            </div>
            <div>
                <h2 className="text-[22px] font-semibold text-[#1DB954] py-2 uppercase">Services</h2>
                <ul className="text-[16px] my-4">
                    <li className="my-2">Web Design</li>
                    <li className="my-2">Web Development</li>
                    <li className="my-2">asdöjasd</li>
                    <li className="my-2">alkjasödfj</li>
                </ul>
            </div>
            <div className="mb-4 md:mb-0">
                <h2 className="text-[22px] font-semibold text-[#1DB954] py-2 uppercase">Contact</h2>
                <p className="text-[16px] my-4">E-mail: mail@mail.com</p>
                <p className="text-[16px] my-4">Phone: 071 123 45 67</p>
            </div>
            <div>
            <h2 className="text-[22px] font-semibold text-[#1DB954] py-2 uppercase">Follow</h2>
            <div className="flex space-x-4">
                <a className="text-white hover:text-[#1DB954] transition-all duration-150 ease-in-out" href="">
                    <TbBrandSpotifyFilled />
                </a>
                <a className="text-white hover:text-[#1DB954] transition-all duration-150 ease-in-out" href="">
                    <ImYoutube2 />
                </a>
                <a className="text-white hover:text-[#1DB954] transition-all duration-150 ease-in-out" href="">
                    <TiSocialInstagram />
                </a>
            </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer