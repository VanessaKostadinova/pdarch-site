import Image from 'next/image'
import Navbar from "./navbar"
import Carousel from "./carousel"

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Carousel />
    </main>
  )
}
