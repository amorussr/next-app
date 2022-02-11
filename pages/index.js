import Head from 'next/head'
import { fetchEntries } from '@utils/contentfulPosts'

import Header from '@components/Header'
import Services from '@components/Services'

export default function Home({services}) {
  return (
    <div className="container">
      <Head>
        <title>Next + Contentful Starter</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,300&display=swap" rel="stylesheet"></link>
      </Head>

      <main className="flex flex-col max-h-screen">
        <Header />
        <Services services={services}/>
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          background: #161616;
          height: 100vh;
        }

        h1 {
          margin: 0;
        }

        * {
          box-sizing: border-box;
        }

        .carousel {
          cursor: grab;
          height: 100%;
          display: flex;
          overflow: hidden;
        }

        .inner-carousel {
          display: flex;
        }

        .item {
          min-width: 22rem;
          height: 100%;
          max-height: calc(100vh - 5rem);
          overflow: hidden;
          border-radius: 1rem;
          margin-left: 10px;
        }
      `}</style>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetchEntries()
  const services = await res.map((p) => {
    return p.fields
  })

  return {
    props: {
      services,
    },
  }
}