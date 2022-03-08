import { format } from "date-fns";
import Layout from "../components/Layout";
import { posts } from "../models/posts"
import Link from "next/link"



export default function Blog() {
  return <Layout pageTitle="Blog">
    <article>
      <h2>Blog</h2>
      <ul className="posts">
        {([...posts].reverse().map(p => {
          return <li key={p.metadata.slug}><span>{p.metadata.date}</span> »  <Link href={linkForPost(p)} title={p.metadata.title}>{p.metadata.title}</Link></li>
        }))}
      </ul>
    </article>
  </Layout>
}

function linkForPost(post) {
  return `/${format(new Date(post.metadata.date), "yyyy/MM/dd")}/${post.metadata.slug}`
}