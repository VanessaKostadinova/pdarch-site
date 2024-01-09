import { useRouter } from 'next/router'

export default function Page() {
    const router = useRouter();
    return (
      <main>
        <p>Post: {router.query.name}</p>
      </main>
    )
  }
  