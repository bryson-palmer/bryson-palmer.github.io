import { Section } from '@/ui'
import { ExperienceCard } from './ExperienceCard'
import { WORK_EXPERIENCE } from './constants'

export const Experience = () => {
  return (
    <Section id={'experience'} title={'Experience'}>
      <div id='experience-list'>
      {WORK_EXPERIENCE.map((workInfo, index) => (
        <ExperienceCard
          key={index}
          {...workInfo}
        />
      ))}
      </div>
    </Section>
  )
}
