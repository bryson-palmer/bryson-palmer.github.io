import { Section } from '@/ui'
import { PROJECTS_LIST } from './constants'
import { ProjectCard } from './ProjectCard'
import './projects.css'

export const Projects = () => {
  return (
    <Section id={'projects'} title={'Projects'}>
      <div className='project-container'>
        {PROJECTS_LIST.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
          />
        ))}
      </div>
      <strong className='small-display'>&lt;- Scroll -&gt;</strong>
      <p className='small-display'>For more projects</p>
    </Section>
  )
}
