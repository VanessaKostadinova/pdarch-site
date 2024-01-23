import { useRouter } from "next/router";
import Head from "next/head";

function MyApp({ Component, pageProps }: { Component: React.ElementType, pageProps: any }) {
    const router = useRouter();
    const canonicalUrl = (`https://pdar.ch` + (router.asPath === "/" ? "" : router.asPath)).split("?")[0];

    return (
        <>
            <Head>
                <link rel="canonical" href={canonicalUrl} />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;