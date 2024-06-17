import { useMemo } from 'react'
import PropTypes from 'prop-types'
import useMediaQuery from '@mui/material/useMediaQuery'
import { createObserver } from '@/utils'
import './education.css'

export const EducationCard = ({
  degreeLink='',
  degreeName='',
  degreeText='',
  id='',
  schoolDescription='',
  schoolLink='',
  schoolName='',
  time='',
  title=''
}) => {
  const isMobile = useMediaQuery('(max-width: 600px')
  const isMobileLandscape = useMediaQuery('(max-width: 900px) and (orientation: landscape)')
  const observerThreshold = useMemo(() => isMobile ? 0.3 : 0.5, [isMobile])
  const observerMargin =  useMemo(() => isMobileLandscape ? '-76px 0px 0px': '-200px 0px -36px',[isMobileLandscape]) 

  // Creates IntersectionObserver by id
  createObserver(`#${id}`, { rootMargin: observerMargin, threshold: observerThreshold })
  return (
    <div id={id} className='education-card glass'>
      <div className='education-header'>
        <h2 className='education-title'>{title}</h2>
        <p className='numeral-text'>{time}</p>
      </div>
      <a
        className='education-link'
        href={schoolLink}
        target='_blank'
        rel='noreferrer'
      >
        {schoolName}
      </a>
      <p className='education-text'>
        {schoolDescription}
      </p>
      {degreeLink ? (
        <a
          className='education-link'
          href={degreeLink}
          target='_blank'
          rel='noreferrer'
        >
          {degreeName}
        </a>
      ) : (
        <p className='degree-text'>{degreeText}</p>
      )}
    </div>
  )
}

EducationCard.propTypes = {
  degreeLink: PropTypes.string,
  degreeName: PropTypes.string,
  degreeText: PropTypes.string,
  id: PropTypes.string,
  schoolDescription: PropTypes.string,
  schoolLink: PropTypes.string,
  schoolName: PropTypes.string,
  time: PropTypes.string,
  title: PropTypes.string
}