import { Html, Head, Main, NextScript } from "next/document"
import Link from "next/link"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
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
          <Link href="/blog">Blog</Link>
          <Link href="https://dokuwiki.privacy.qvarford.net">Personal Wiki</Link>
        </nav>
        <footer>
          <Link href="/assets/cv.pdf">CV</Link>
          <Link href="https://se.linkedin.com/in/johannes-qvarford-305905103">My LinkedIn</Link>
          <Link href="https://github.com/johannes-qvarford">My Github</Link>
        </footer>
        <NextScript />
      </body>
    </Html>
  )
}
