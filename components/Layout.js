import Head from "next/head";
import { Fragment } from "react";

const siteTitle = "Johannes Qvarford's career site"

export default function Layout({ pageTitle, children }) {
  return <Fragment>
    <Head>
      <title>{`${pageTitle} - ${siteTitle}`}</title>
    </Head>
    {children}
  </Fragment>;
}