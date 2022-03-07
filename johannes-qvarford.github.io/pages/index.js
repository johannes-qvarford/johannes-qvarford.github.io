import Head from 'next/head'
import Layout from '../components/Layout'
import Image from "../components/Image"
import styles from '../styles/Home.module.css'

export default function Home() {
  return <Layout pageTitle="Home">
    <article>
      <h2>Welcome!</h2>

      <img className="self-picture" src="/assets/me.jpg" alt="A picture of this site's author: Johannes Qvarford." />

      <p>
        My name is Johannes Qvarford and I&apos;m a software developer/architect.
      </p>

      <p>
        On this site you will (soon) find blog posts about my professional career, and my CV.
        Here is <a href="https://github.com/johannes-qvarford/johannes-qvarford.github.io">the site&apos;s Github repository.</a>.
      </p>

      <p>
        Hope you enjoy your stay!
      </p>
    </article>
  </Layout>
}
