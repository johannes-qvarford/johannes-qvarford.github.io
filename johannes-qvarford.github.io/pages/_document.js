import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8" />
      </Head>
      <body>
        <header>
          <h1>Johannes Qvarford&apos;s career site</h1>
        </header>
        <main>
          <Main />
        </main>
        <nav>
          <h2 className="nocontent">Navigation</h2>
          <Link href="/">Home</Link>
          <a href="/blog">Blog</a>
          <a href="/recommendations">Recommendations</a>
        </nav>
        <footer>
          <a href="https://se.linkedin.com/in/johannes-qvarford-305905103">My LinkedIn</a>
          <a href="https://github.com/johannes-qvarford">My Github</a>
        </footer>
        <NextScript />
      </body>
    </Html>
  )
}
