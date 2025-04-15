import './Home.css'
import Typewriter from '../../components/Typewriter'

function Home() {
  return (
    <h1 className="text-3xl font-bold underline">
      <Typewriter text="Em construção..." speed={150} />
    </h1>
  )
}

export default Home