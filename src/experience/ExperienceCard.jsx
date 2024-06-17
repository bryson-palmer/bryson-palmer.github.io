import { useCallback, useMemo, useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Button from '@mui/material/Button'
import useMediaQuery from '@mui/material/useMediaQuery'
import Link from '@mui/material/Link'
import PropTypes from 'prop-types'
import { createObserver } from '@/utils'
import './experience.css'

/*
  This is a reusable card component for work experience.
  Props expected are:
    position: string for position in company,
    text: array of string(s) for work experience description(s),
    time: string for year(s) worked,
    companyInfo: object for company name(s), link(s), and app
      companyName: string for company name,
      companyLink: string for company link,
      formerName: string for formerly known as company name,
      formerLink: string for formerly known as company link,
      appName: string for app name,
      appLink: string for app link
*/

export const ExperienceCard = ({
  position = '',
  text = [],
  time = '',
  companyInfo = {},
}) => {
  const [showMore, setShowMore] = useState(false)
  const isMobile = useMediaQuery('(max-width: 600px')
  const isMobileLandscape = useMediaQuery('(max-width: 1000px) and (orientation: landscape)')

  const toggleShowMore = useCallback(() => setShowMore(!showMore), [showMore])
  const {
    companyName = '',
    companyLink = '',
    formerName = '',
    formerLink = '',
    appName = '',
    appLink = ''
  } = companyInfo

  const observerThreshold = useMemo(() => isMobile ? 0.3 : 0.5, [isMobile])
  const observerMargin =  useMemo(() => isMobileLandscape ? '0px': '-100px 0px',[isMobileLandscape]) 

  // Creates IntersectionObserver by id 
  createObserver('#experience-card-observer', { rootMargin: observerMargin, threshold: observerThreshold })

  return (
    <div id='experience-card-observer' className="experience-card glass">
      <div className="experience-header">
        <div className="experience-org">
          <div className='company-name'>
            <Link
              className="experience-link"
              href={companyLink}
              target="_blank"
              rel="noreferrer"
            >
              {companyName}
            </Link>
            {formerName ? (
              <Link
                className="experience-link"
                href={formerLink}
                target="_blank"
                rel="noreferrer"
              >
                {formerName}
              </Link>
            ) : null}
          </div>
          <Link
            className="experience-link platform"
            href={appLink}
            target="_blank"
            rel="noreferrer"
          >
            <span className='platform'>Platform: &nbsp;</span>
            {appName}
          </Link>
        </div>
        <div className="experience-role">
          <i>{position}</i>
          <p className="numeral-text">{time}</p>
        </div>
      </div>
      <div
        className="experience-text"
        style={
          isMobileLandscape && !showMore
            ? {
                maxHeight: "120px",
                overflowY: "hidden",
              }
            : {
                maxHeight: "100%",
                overflowY: "visible",
              }
        }
      >
        {text.map((description, index) => (
          <p key={index}>{description}</p>
        ))}
      </div>
      <Button
        className='read-more-experience'
        aria-label='read more'
        variant='text'
        onClick={toggleShowMore}
        endIcon={<ExpandMoreIcon sx={{ transform: showMore ? 'rotate(180deg)' : 'rotate(0deg)' }} />}
        href={showMore ? '#experience-list' : ''}
      >
        {showMore ? 'Read less' : 'Read more'}
      </Button>
    </div>
  )
}

ExperienceCard.propTypes = {
  position: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.string),
  time: PropTypes.string,
  companyInfo: PropTypes.shape({
    companyName: PropTypes.string,
    companyLink: PropTypes.string,
    formerName: PropTypes.string,
    formerLink: PropTypes.string,
    appName: PropTypes.string,
    appLink: PropTypes.string
  })
}
