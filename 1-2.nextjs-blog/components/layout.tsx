import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export const siteTitle = "Seok의 웹 기술 블로그입니다";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Next.js Sample Blog" />
      </Head>
      <header>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpeg"
              className={utilStyles.borderCircle}
              height={64}
              width={64}
              alt={"seok"}
            />
            <h1 className={utilStyles.headingXl}>{siteTitle}</h1>
          </>
        ) : (
          <Link href="/">
            <a className={`${utilStyles.headingSm} ${utilStyles.primaryColor}`}>
              {siteTitle}
            </a>
          </Link>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a className={utilStyles.primaryColor}>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
