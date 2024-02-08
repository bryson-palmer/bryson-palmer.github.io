import { AboutMe } from '@/aboutMe'
import { Education } from '@/education'
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
      <Education />
    </>
  )
}

export default App
