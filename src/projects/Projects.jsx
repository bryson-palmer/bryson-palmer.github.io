import useMediaQuery from '@mui/material/useMediaQuery'
import { PROJECTS_LIST } from './constants'
import { ProjectCard } from './ProjectCard'
import { Section } from '@/ui'
import { createObserver } from '@/utils'
import './projects.css'
import { useMemo } from 'react'

export const Projects = () => {
  const isMobile = useMediaQuery('(max-width: 600px')
  const isMobileLandscape = useMediaQuery('(max-width: 900px) and (orientation: landscape)')
  const observerThreshold = useMemo(() => isMobile ? 0.3 : 0.5, [isMobile])
  const observerMargin =  useMemo(() => isMobileLandscape ? '0px': '-100px 0px',[isMobileLandscape]) 

  // Creates IntersectionObserver by id 
  createObserver('#projects-observer', { rootMargin: observerMargin, threshold: observerThreshold })

  return (
    <Section id={'projects'} title={'Projects'}>
      <div id='projects-observer' >
        <div className='project-container'>
          {PROJECTS_LIST.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>
        <strong className='small-display'>&lt;- Scroll for more projects -&gt;</strong>
      </div>
    </Section>
  )
}
