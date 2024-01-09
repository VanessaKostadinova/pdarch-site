import { useRouter } from 'next/router'
import { promises as fs } from 'fs'
import path from 'path'

type PropContent = {
  title: string;
}

export default function Page( props: PropContent) {
    const router = useRouter();

    return (
      <main>
        <p>Post: { props.title }</p>
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