import { AboutMe } from '@/aboutMe'
import { Experience } from '@/experience'
import { Navbar } from '@/navbar'
import { Welcome } from '@/welcome'

function App() {
  return (
    <>
      <Navbar />
      <Welcome />
      <AboutMe />
      <Experience />
    </>
  )
}

export default App
