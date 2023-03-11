import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import About from '../components/About'
import Banner from 'components/Banner'
import Events from 'components/Events'
import Banner2 from 'components/Banner2'
import Team from 'components/Team'
import Footer from 'components/Footer'

export default function Home() {
  return (
  <div>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
    <Header />
    <About />
    <Banner/>
    <Events/>
    <Team />  
    <Banner2/>
    <Footer />
  </div>
  )
}
