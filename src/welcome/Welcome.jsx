import { Fragment } from 'react'
import DownloadIcon from '@mui/icons-material/Download'
import GitHubIcon from '@mui/icons-material/GitHub'
import IconButton from '@mui/material/IconButton'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { QUICK_LINKS } from './constants'
import { Hero } from '@/hero'
import './welcome.css'

export const Welcome = () => {
  return (
    <section id='welcome-section'>
      <div id='welcome-card'>
        <p>Hi, I&apos;m</p>
        <h1>Bryson.</h1>
        <p className='subtitle'>Software Developer / Web Developer</p>
        <div className='quick-links'>
          {QUICK_LINKS.map(({ href, title = '' }, index) => {
            const isResume = title === 'Resume'
            return (
              <Fragment key={index}>
                {isResume ? (
                  <a
                    id='resume-link'
                    className='svg'
                    download='bpalmer-resume'
                    href={href}
                    aria-label={`link to ${title}`}
                    target='_blank'
                    rel='noreferrer'
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
