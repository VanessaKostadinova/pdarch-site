import { useRouter } from 'next/router'
import { promises as fs } from 'fs'
import path from 'path'
import '@/app/globals.css'
import Navbar from '@/components/navbar';
import { EmblaCarousel } from '@/components/images/carousel/embla-carousel';
import SubTitle from '@/components/main-page/sub-title';
import './projects.css';

type PropContent = {
  title: string;
  subtitle: string;
  carouselImages: { src: string, alt: string }[],
  galleryBackgroundImage: {src: string, alt: string}
}

export default function Page(props: PropContent) {
  const router = useRouter();

  console.log(props)
  return (
    <main className='bg-black pt-14 md:pt-20'>
      <div className="flex flex-col items-center mb-5">
        <div className='w-full md:w-4/5 lg:w-2/3 xl:w-1/2'>
          <Navbar />
          <div className="absolute z-10">
            <div className="my-20 px-4 md:px-0">
              <h1 className="text-white uppercase text-6xl my-3">{props.title}</h1>
              <h2 className="text-white text-4xl my-3">{props.subtitle}</h2>
            </div>
          </div>
        </div>
        <div className='h-[calc(100vh-10rem)]'>
          <EmblaCarousel images={props.carouselImages} />
        </div>
        <div className='my-5 w-full md:w-4/5 lg:w-2/3 xl:w-1/2 px-4 md:px-0'>
          <div className='flex gap-5 flex-col justify-between md:flex-row'>
            <div className='flex flex-col md:w-2/5'>
              <h2 className="text-white text-5xl">SUMMARY</h2>
              <p className='text-white text-justify'>
                Lorem ipsum dolor sit amet. Est dignissimos maiores ut nobis cumque qui quis cumque. Sed fugit illo ex officiis enim ea illo modi hic dolorem dolorem.
                At vitae accusamus a error aperiam qui rerum Quis rem nisi voluptatum. Et dignissimos minus ad quae illum ut molestias sint ea soluta reiciendis quo nihil quia quo veritatis quas.
              </p>
            </div>
            <div className="w-full md:w-80 shrink-0 h-fit p-10 md:p-10 border-2 rounded-sm border-white">
              <p className='text-white'>
                Client<br />
                Date<br />
                Location<br />
                Size<br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-5 items-center w-full mb-5'>
        <div className='flex flex-col md:flex-row gap-5 md:items-center h-full w-full md:w-4/5 lg:w-2/3 xl:w-1/2'>
          <div className='flex w-full md:w-2/5 h-[20rem] md:h-[50rem] overflow-hidden'>
            <div className='w-full'>
              <img className="zoomed-image" src="https://placehold.co/600x840/FFFFFF/000" />
            </div>
          </div>
          <div className='flex flex-col gap-5 md:gap-32 md:w-3/5 px-4 md:px-0'>
            <div>
              <h2 className="text-white text-5xl">DESIGN</h2>
              <p className='text-white text-justify'>
                Lorem ipsum dolor sit amet. Est dignissimos maiores ut nobis cumque qui quis cumque. Sed fugit illo ex officiis enim ea illo modi hic dolorem dolorem.
                At vitae accusamus a error aperiam qui rerum Quis rem nisi voluptatum. Et dignissimos minus ad quae illum ut molestias sint ea soluta reiciendis quo nihil quia quo veritatis quas.
              </p>
            </div>
            <div>
              <h2 className="text-white text-5xl">FEATURES</h2>
              <p className='text-white text-justify'>
                Lorem ipsum dolor sit amet. Est dignissimos maiores ut nobis cumque qui quis cumque. Sed fugit illo ex officiis enim ea illo modi hic dolorem dolorem.
                At vitae accusamus a error aperiam qui rerum Quis rem nisi voluptatum. Et dignissimos minus ad quae illum ut molestias sint ea soluta reiciendis quo nihil quia quo veritatis quas.
              </p>
            </div>
          </div>
        </div>
        <div className='w-full flex items-center justify-center overflow-hidden h-[40vh]'>
          <div className="absolute z-10">
            <h1 className="text-black uppercase text-9xl my-3">Gallery</h1>
          </div>
          <img className="zoomed-image" src={props.galleryBackgroundImage.src} />
        </div>
        <div className='grid grid-cols-2'>
          <div className='w-full'>
            <img className="zoomed-image" src="https://placehold.co/600x840/FFFFFF/000" />
          </div>
        </div>
      </div>
      <div className="bg-white w-full">
        <div className="flex flex-col py-4 items-center justify-items-center px-20">
          <h2 className="self-center text-5xl mb-8">DEMO</h2>
        </div>
      </div>
    </main>
  )
}

export const getStaticPaths = (async () => {
  const postsDirectory = path.join(process.cwd(), 'src', 'content', 'projects');
  const filenames = await fs.readdir(postsDirectory);

  const paths = filenames.map(filename => ({
    params: { name: filename.replace('.json', '') },
  }));

  return {
    paths, fallback: false
  }
})

export const getStaticProps = (async ({ params }: { params: { name: string } }) => {
  const postsDirectory = path.join(process.cwd(), 'src', 'content', 'projects', `${params.name}.json`);
  const fileContents = await fs.readFile(postsDirectory, 'utf8');
  const data = JSON.parse(fileContents);

  return { props: { ...data } };
})