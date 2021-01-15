import {DbsGroup} from "../components/dbs-group";
import React from "react";
import Head from 'next/head';
import {TestB} from "../components/test/test-b";
import TestA from "../components/test/test-a";


export function Home({}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
      <div>
        <Head>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-6QKVW0QB9Z"/>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-6QKVW0QB9Z');
              `,
                }}
            />
        </Head>
        {/*<DbsGroup/>*/}
        <TestA/>
        <TestB/>
      </div>
  )
}

export default Home;
