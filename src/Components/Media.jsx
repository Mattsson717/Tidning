import { useEffect } from "react"
import Aos from "aos"

const Media = () => {

    useEffect(()=> {
        Aos.init({
            easing: 'ease-in-out-quart',
            delay: 0,
            duration: 750
        }, [])
    } )
  return (
    <div id="Media" className="p-20 flex flex-col items-center justify-center ">
    <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-[#1DB954]">media</h1>
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
        <h2  data-aos="fade-up" className="text-[26px] flex items-center justify-center font-semibold text-[#1DB954] rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-[#1DB954] b_glow uppercase">Musik</h2>
        <h2  data-aos="fade-down" className="text-[26px] flex items-center justify-center font-semibold text-[#1DB954] rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-[#1DB954] b_glow uppercase">Videos</h2>
        <h2  data-aos="fade-up" className="text-[26px] flex items-center justify-center font-semibold text-[#1DB954] rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-[#1DB954] b_glow uppercase">Podcast</h2>
        <h2  data-aos="fade-down" className="text-[26px] flex items-center justify-center font-semibold text-[#1DB954] rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-[#1DB954] b_glow uppercase">Twitch</h2>
    </div>
</div>
  )
}

export default Media