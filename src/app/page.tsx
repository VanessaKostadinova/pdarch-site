import Image from 'next/image'
import Navbar from "./navbar"
import Carousel from "./images/carousel"
import MainContent from './content/main-page'
import LandingImage from './images/landing'
import LandingGallery from './images/landing-gallery'
import Title from './content/main-page/title'

export default function Home() {
  return (
    <main className="bg-black flex flex-col items-center">
      <div className='md:w-4/5 lg:w-2/3 xl:w-1/2 px-4'>
        <Navbar />
        <Title />
        <LandingImage />
        <MainContent />
        <LandingGallery />
      </div>
    </main>
  )
}
