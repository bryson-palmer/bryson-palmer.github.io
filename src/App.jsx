import { AboutMe } from '@/aboutMe'
import { Contact } from '@/contact'
import { Education } from '@/education'
import { Experience } from '@/experience'
import { Projects } from '@/projects'
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
      <Projects />
      <Contact />
    </>
  )
}

export default App
