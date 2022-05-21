import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Head/Header'
import Hero from '../components/Hero/Hero'
import Features from '../components/Features/Features'
import Portfolio from '../components/Portfolio/Portfolio'
import Resume from '../components/Resume/Resume'
import Testimonial from '../components/Testimonial/Testimonial'
import Blog from '../components/Blog/Blog'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Shan Portfolio</title>
        <meta name="description" content="Welocome to my world !" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>
      <main>
        <Header />
        <Hero />
        <Features />
        <Portfolio />
        <Resume />
        <Testimonial />
        <Blog />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default Home
