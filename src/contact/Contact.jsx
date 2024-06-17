import useMediaQuery from '@mui/material/useMediaQuery'
import { CONTACT_LIST } from './constants'
import { Section } from '@/ui'
import { createObserver } from '@/utils'
import './contact.css'
import { useMemo } from 'react'

export const Contact = () => {
  const isMobile = useMediaQuery('(max-width: 600px')
  const isMobileLandscape = useMediaQuery('(max-width: 900px) and (orientation: landscape)')
  const observerThreshold = useMemo(() => isMobile ? 0.3 : 0.5, [isMobile])
  const observerMargin =  useMemo(() => isMobileLandscape ? '0px': '-100px 0px',[isMobileLandscape])

  // Creates IntersectionObserver by id 
  createObserver('#contact-observer', { rootMargin: observerMargin, threshold: observerThreshold })
  return (
    <Section id={'contact'} title={'Contact'}>
      <div id='contact-observer'>
        <p className='text-center'>
          If you want to get in touch, feel free to send me an email.
        </p>
        <ul id='contact-list'>
          {CONTACT_LIST.map(({ href, name }, index) => (
            <li key={index}>
              <a
                href={href}
                target='_blank'
                rel='noreferrer'
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
