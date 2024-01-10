import { useRouter } from 'next/router'
import { promises as fs } from 'fs'
import path from 'path'
import '@/app/globals.css'
import Navbar from '@/components/navbar';
import { EmblaCarousel } from '@/components/images/carousel/embla-carousel';
import SubTitle from '@/components/main-page/sub-title';

type PropContent = {
  title: string;
  subtitle: string;
  carouselImages: {src: string, alt: string}[]
}

export default function Page( props: PropContent) {
  const router = useRouter();

  console.log(props)
  return (
    <main>
      <div className="bg-black flex flex-col items-center">
        <div className='w-full md:w-4/5 lg:w-2/3 xl:w-1/2 px-4 md:px-0'>
          <Navbar />
          <div className="absolute z-10">
            <div className="my-20">
                <h1 className="text-white uppercase text-6xl my-3">{ props.title }</h1>
                <h2 className="text-white text-4xl my-3">{ props.subtitle }</h2>
            </div>
          </div>
        </div>
        <div className='h-[calc(100vh-15rem)]'>
          <EmblaCarousel images={props.carouselImages} />
        </div>
        <div className='my-5 w-full md:w-4/5 lg:w-2/3 xl:w-1/2 px-4 md:px-0'>
          <div className='flex'>
            <div className="w-[25rem] mr-5 shrink-0 h-fit p-16 border border-2 rounded-sm border-white">
              <p className='text-white'>
                Client<br />
                Date<br />
                Location<br />
                Size<br />
              </p>
            </div>
            <div className='flex flex-col'>
              <h2 className="text-white text-5xl">DESIGN</h2>
              <p className='text-white'>
                Lorem ipsum dolor sit amet. Est dignissimos maiores ut nobis cumque qui quis cumque. Sed fugit illo ex officiis enim ea illo modi hic dolorem dolorem.
                At vitae accusamus a error aperiam qui rerum Quis rem nisi voluptatum. Et dignissimos minus ad quae illum ut molestias sint ea soluta reiciendis quo nihil quia quo veritatis quas.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
          <div className="flex flex-col py-4 items-center justify-items-center px-20">
            <h2 className="self-center text-5xl mb-8">DEMO</h2>
          </div>
        </div>
    </main>
  )
}

export const getStaticPaths = (async() => {
  const postsDirectory = path.join(process.cwd(), 'src', 'content', 'projects');
  const filenames = await fs.readdir(postsDirectory);

  const paths = filenames.map(filename => ({
    params: { name: filename.replace('.json', '') },
  }));

  return {
    paths, fallback: false
  }
})

export const getStaticProps = (async ({ params } : {params: {name: string}}) => {
  const postsDirectory = path.join(process.cwd(), 'src', 'content', 'projects', `${params.name}.json`);
  const fileContents = await fs.readFile(postsDirectory, 'utf8');
  const data = JSON.parse(fileContents);

  return { props: { ...data } };
})