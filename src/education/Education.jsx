import Stack from '@mui/material/Stack'
import { EducationCard } from './EducationCard'
import { EDUCATION_LIST } from './constants'
import { Section } from '@/ui'

export const Education = () => {
  return (
    <Section id={'education'} title={'Education'}>
      <Stack alignItems='center' spacing={3}>
        {EDUCATION_LIST.map((schoolInfo, index) => (
          <EducationCard
            key={index}
            {...schoolInfo}
          />
        ))}
      </Stack>
    </Section>
  )
}
