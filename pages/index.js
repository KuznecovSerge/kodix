import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AutoFindPanel from '../components/AutoFindPanel'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Capitan Quack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main>
        <h1 className="title">
          ¡Ay caramba!
        </h1>

        <AutoFindPanel/>

      </main>

      <Footer/>

      <style jsx>{`
        .container {
          min-height: 100vh;
          min-width: 280px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        main {
          padding: 5rem 0.4rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          color: #282d30;
        }

        * {
          box-sizing: border-box;
        }

        /* roboto-regular - latin_cyrillic */
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          src: local('Roboto'), local('Roboto-Regular'),
              url('../fonts/roboto-v20-latin_cyrillic-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
              url('../fonts/roboto-v20-latin_cyrillic-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
        }
      `}</style>
    </div>
  )
}
