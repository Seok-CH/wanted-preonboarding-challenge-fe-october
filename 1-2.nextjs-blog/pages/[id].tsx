import Head from "next/head";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next";
import Date from "../components/date";
import Layout from "../components/layout";
import { getAllPostIds, getPostData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";
import postStyles from "../styles/post.module.css";

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
    previous: string;
    next: string;
  };
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightColor}>
          <Date dateString={postData.date} />
        </div>
        <hr />
        <div
          className={utilStyles.textMd}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
      <nav className={postStyles.nav}>
        {postData.previous ? (
          <Link href={`/${postData.previous}`}>
            <div
              className={`${postStyles.navItemLeft} ${utilStyles.primaryColor}`}
            >
              <small
                className={`${utilStyles.textSm} ${utilStyles.lightColor}`}
              >
                {"이전 포스트"}
              </small>
              <br />
              {postData.previous}
            </div>
          </Link>
        ) : (
          <div className={`${postStyles.navItemNoContent}`}></div>
        )}
        {postData.next ? (
          <Link href={`/${postData.next}`}>
            <div
              className={`${postStyles.navItemRight}  ${utilStyles.primaryColor}`}
            >
              <small
                className={`${utilStyles.textSm} ${utilStyles.lightColor}`}
              >
                {"다음 포스트"}
              </small>
              <br />
              {postData.next}
            </div>
          </Link>
        ) : (
          <div className={`${postStyles.navItemNoContent}`}></div>
        )}
      </nav>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params!.id as string);
  return {
    props: {
      postData,
    },
  };
};
