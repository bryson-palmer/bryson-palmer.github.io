import { useState, useEffect } from 'react'

import { AboutMe } from '@/aboutMe'
import { Contact } from '@/contact'
import { Education } from '@/education'
import { Experience } from '@/experience'
import { Footer } from '@/footer'
import { Projects } from '@/projects'
import { Navbar } from '@/navbar'
import { SplashScreen } from '@/splashScreen'
import SplineBackground from '@/SplineBackground'
import { Welcome } from '@/welcome'
import './index.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3500)
  }, [])
  return (
    <>
      <SplineBackground />
      {isLoading ? <SplashScreen /> : (
        <div id='app'>
          <Navbar />
          <Welcome />
          <AboutMe />
          <Experience />
          <Education />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
