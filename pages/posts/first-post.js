import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost() {
   return (
      <Layout>
         {/* INFO: The Head will help us to especified some properties only for the current page */}
         <Head>
            <title>First Post</title>
            {/* <script src="https://connect.facebook.net/en_US/sdk.js" /> This script tag below is the better alternative of doing this, it allows us to avoid blocking loadings that could cost us performance issues*/}
         </Head>
         <Script
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() =>
               console.log(
                  `script loaded correctly, window.FB has been populated`
               )
            }
         />
         <h1>First Post</h1>
         <h2>
            {/* NOTE: Nextjs does not required to have a tag inside the Link tag at least for the latest versions */}
            <Link href="/">Back to home</Link>
         </h2>
      </Layout>
   );
}
