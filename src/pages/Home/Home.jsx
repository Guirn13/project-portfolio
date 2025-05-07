import './Home.css'
import HeaderMenu from '../../components/Header'
import Homes from '../../components/Homes'
import About from '../../components/About'
import Service from '../../components/Service'
import Projects from '../../components/Projects'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'

function Home() {
  return (
    <>
    <HeaderMenu />
    <Homes />
    <About />
    <Service />
    <Projects />
    <Contact />
    <Footer />
    </>
  )
}

export default Home