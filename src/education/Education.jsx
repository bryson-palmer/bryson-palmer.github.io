import { EducationCard } from './EducationCard'
import { EDUCATION_LIST } from './constants'
import { Section } from '@/ui'

export const Education = () => {
  return (
    <Section id={'education'} title={'Education'}>
      <div className='education-stack'>
        {EDUCATION_LIST.map((schoolInfo, index) => (
          <EducationCard
            key={index}
            {...schoolInfo}
          />
        ))}
      </div>
    </Section>
  )
}
