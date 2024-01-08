import LandingImage from '@/components/images/landing'
import LandingGallery from '@/components/images/landing-gallery'
import AboutMe from '@/components/main-page/about-me'
import ContactUs from '@/components/main-page/contact-us'
import LandingPhilosophy from '@/components/main-page/landing-philosophy'
import Title from '@/components/main-page/title'
import Navbar from '@/components/navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="bg-black flex flex-col items-center">
        <div className='md:w-4/5 lg:w-2/3 xl:w-1/2 px-4'>
          <Navbar />
          <Title />
          <LandingImage />
          <div className='grid grid-col-1 gap-20'>
            <LandingGallery />
            <LandingPhilosophy />
            <AboutMe />
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col items-center">
        <div className='md:w-4/5 lg:w-2/3 xl:w-1/2 px-4'>
          <ContactUs />
        </div>
      </div>
    </main>
  )
}
