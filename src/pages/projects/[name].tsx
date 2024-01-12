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
  galleryBackgroundImage: { src: string, alt: string }
}

export default function Page(props: PropContent) {
  const router = useRouter();

  console.log(props)
  return (
    <main className='bg-black pt-14 md:pt-20'>
      <div className="flex flex-col items-center mb-5">
        <Navbar />
        <div className='w-full md:w-4/5 lg:w-2/3 xl:w-1/2'>
          <div className="absolute z-10">
            <div className="my-20 mx-4 md:mx-0 bg-black bg-opacity-50">
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
              <img className="zoomed-image" src="https://rockcote.com.au/wp-content/uploads/2022/05/Coloured-Render-Image.jpg" />
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
        <div className='w-full flex items-center flex-shrink justify-center overflow-hidden h-[20vh] md:h-[30vh]'>
          <div className="absolute z-10">
            <h1 className="text-black bg-white bg-opacity-50 uppercase text-7xl md:text-9xl my-3">Gallery</h1>
          </div>
          <img className="zoomed-image" src={props.galleryBackgroundImage.src} />
        </div>
        <div className='flex flex-col gap-5 items-center w-full mb-5'>
          <div className='flex flex-col 3md:flex-row gap-5 md:items-center h-full w-full md:w-4/5 lg:w-2/3 xl:w-1/2'>

            <div className='flex flex-col md:flex-row px-4 md:px-0 gap-4 md:gap-5'>

              <div className='flex w-full flex-col gap-4 md:gap-5'>
                <div className='w-full'>
                  <img className="zoomed-image" src="https://renify.s3.amazonaws.com/system/uploads/images/1929/Michael_Tarring_Architects_Rendering_a_house.jpg" />
                </div>
                <div className='w-full'>
                  <img className="zoomed-image" src="https://cdn.habitusliving.com/wp-content/uploads/1.rendering-2.jpg" />
                </div>
              </div>

              <div className='flex w-full flex-col gap-4 md:gap-5'>
                <div className='w-full'>
                  <img className="zoomed-image" src="https://ralphplastering.co.uk/wp-content/uploads/2019/11/IMG_7514-1024x683.jpg" />
                </div>
                <div className='w-full'>
                  <img className="zoomed-image" src="https://www.jub.org.uk/wp-content/uploads/2019/05/IMG_1670.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-full px-4 md:px-0">
        <div className="flex flex-col mx-4 md:mx-0 py-16 items-center justify-items-center">
          <div className='flex flex-col w-full md:w-4/5 lg:w-2/3 xl:w-1/2'>
            <div className="flex flex-col py-4 items-center justify-items-center">
              <h2 className="self-center text-5xl mb-8">DEMO</h2>
              <iframe src="https://speckle.xyz/embed?stream=9638887c4a&commit=04d0759b5a" width="100%" height="400" frameBorder="0"></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-4 md:mx-0 py-16 items-center justify-items-center">
        <div className='flex flex-col w-full md:w-4/5 lg:w-2/3 xl:w-1/2'>
          <h2 className="text-white self-center text-5xl mb-8">Contact Us</h2>
          <p className='text-white'>
            Lorem ipsum dolor sit amet. Est dignissimos maiores ut nobis cumque qui quis cumque. Sed fugit illo ex officiis enim ea illo modi hic dolorem dolorem.
            At vitae accusamus a error aperiam qui rerum Quis rem nisi voluptatum. Et dignissimos minus ad quae illum ut molestias sint ea soluta reiciendis quo nihil quia quo veritatis quas.
          </p>
          <button className="w-fit self-center my-4 bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={() => router.push('mailto:email@yahoo.com')}>Email</button>
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