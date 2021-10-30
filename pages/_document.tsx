import Document, { Html,Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"/>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Crimson+Text&family=Open+Sans&display=swap"/>
                    <link rel="icon" href="/icon.png" type="image/x-icon"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <div id="notifications"></div>
                </body>
            </Html>
        )
    }
}
