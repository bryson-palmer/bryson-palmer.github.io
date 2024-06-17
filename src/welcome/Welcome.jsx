import { Fragment, useMemo } from 'react'
import DownloadIcon from '@mui/icons-material/Download'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import { QUICK_LINKS } from './constants'
import { Hero } from '@/hero'
import { createObserver } from '@/utils'
import './welcome.css'

export const Welcome = () => {
  const isMobile = useMediaQuery('(max-width: 600px')
  const isMobileLandscape = useMediaQuery('(orientation: landscape)')
  const observerThreshold = useMemo(() => isMobile ? 0.3 : 0.5, [isMobile])
  const observerMargin =  useMemo(() => isMobileLandscape ? '0px': '-270px 0px -190px',[isMobileLandscape]) 

  // Creates IntersectionObserver by id
  createObserver(
    '#welcome-section',
    { rootMargin: observerMargin, threshold: observerThreshold }
  )
  return (
    <section id='welcome-section'>
      <div id='welcome-card'>
        <p>Hi, I&apos;m a</p>
        <h1>frontend</h1>
        <p className='subtitle'>software developer.</p>
        <div className='quick-links'>
          {QUICK_LINKS.map(({ href, title = '' }, index) => {
            const isResume = title === 'resume'
            return (
              <Fragment key={index}>
                {isResume ? (
                  <a
                    id='resume-link'
                    className='svg'
                    download='bpalmer-resume'
                    href={href}
                    aria-label={`link to ${title}`}
                  >
                    <DownloadIcon /> {title}
                  </a>
                ) : (
                  <a
                    className='svg'
                    href={href}
                    aria-label={`link to ${title}`}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <IconButton aria-label={`link to ${title}`}>
                      {title === 'github' ? <GitHubIcon /> : <LinkedInIcon />}
                    </IconButton>
                  </a>
                )}
              </Fragment>
            )
          })}
        </div>
      </div>
      <Hero />
    </section>
  )
}
