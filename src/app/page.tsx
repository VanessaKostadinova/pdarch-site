import Image from 'next/image'
import Navbar from "./navbar"
import Carousel from "./images/carousel"
import MainContent from './content/main-page'

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Carousel />
      <MainContent />
    </main>
  )
}
