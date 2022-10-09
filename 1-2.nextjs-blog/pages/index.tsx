import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import Layout, { siteTitle } from "../components/layout";
import Date from "../components/date";
import utilStyles from "../styles/utils.module.css";
import mainStyles from "../styles/main.module.css";
import { getSortedPostsData } from "../lib/posts";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={mainStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={mainStyles.listItem} key={id}>
              <Link href={`/${id}`}>
                <a
                  className={`${utilStyles.headingSm} ${utilStyles.primaryColor} `}
                >
                  {title}
                </a>
              </Link>
              <br />
              <small
                className={`${utilStyles.textSm} ${utilStyles.lightColor}`}
              >
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
