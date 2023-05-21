import { Html, Head, Main, NextScript} from 'next/document'
import Link from 'next/link'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <Link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"> 
      </Link> 
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
