import '../styles/globals.css'
import Head from "next/head";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="assets/round-team-logo.png"
                />


            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
