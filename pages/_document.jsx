import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-2B1DBKSKZW"
                />
                <script>
                    {`
                        window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date()); gtag('config', 'G-2B1DBKSKZW');
                    `}
                </script>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    );
}
