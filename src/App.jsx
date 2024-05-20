import { useEffect, useState } from "react"
import About from "./Components/About"
import Banner from "./Components/Banner"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Magazine from "./Components/Magazine"
import Media from "./Components/Media"
import Navbar from "./Components/Navbar"
import {BallTriangle} from "react-loader-spinner"

function App() {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  },[])

  return (
    <>
    {
      loading ?
      
      <div className="bg-slate-900 h-[100vh] flex justify-center items-center ">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#1DB954"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>


      :

      <div className='bg-slate-900'>
      <Navbar />
      <Banner />
      <About />
      <Media />
      <Magazine />
      <Contact />
      <Footer />
    </div>
    }
    </>
  )
}

export default App
