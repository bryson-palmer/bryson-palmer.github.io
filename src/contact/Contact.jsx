import { Section } from '@/ui'
import { CONTACT_LIST } from './constants'
import './contact.css'

export const Contact = () => {
  return (
    <Section id={'contact'} title={'Contact'}>
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
    </Section>
  )
}
