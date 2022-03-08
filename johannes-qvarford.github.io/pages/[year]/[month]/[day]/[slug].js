import { format } from "date-fns";
import Layout from "../../../../components/Layout";
import { findBySlug, posts } from "../../../../models/posts";

export async function getStaticPaths() {
  const routes = posts.map(p => ({ params: { slug: p.metadata.slug, ...getDateParams(p.metadata.date) } }))

  return {
    paths: routes,
    fallback: false,
  }
}

function getDateParams(dateString) {
  const date = new Date(dateString)
  return { year: format(date, "yyyy"), month: format(date, "MM"), day: format(date, "dd") }
}

export async function getStaticProps({ params: { slug } }) {
  return {
    props: { slug }
  }
}

export default function Post({ slug }) {
  const { metadata: { title, date }, component } = findBySlug(slug)
  return <Layout pageTitle={title}>
    <article>
      <h2>{title}</h2>
      <p className="meta">
        Written on {date}
      </p>
      {component()}
    </article>
  </Layout>
}