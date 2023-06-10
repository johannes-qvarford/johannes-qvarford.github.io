import Layout from "../components/Layout"
import Link from "next/link"

export default function Home() {
  return <Layout pageTitle="Home">
    <article>
      <h2>Welcome!</h2>

      <img className="self-picture" src="/assets/me.jpg" alt="A picture of this site&apos;s author: Johannes Qvarford." />

      <p>
        My name is Johannes Qvarford and I&apos;m a solutions architect.
      </p>

      <p>
        On this site you will find blog posts about my professional career, and my <Link href="/assets/cv.pdf">CV</Link>.
        Here is <a href="https://github.com/johannes-qvarford/johannes-qvarford.github.io">the site&apos;s Github repository.</a>.
      </p>

      <p>
        Hope you enjoy your stay!
      </p>
    </article>
  </Layout>
}
