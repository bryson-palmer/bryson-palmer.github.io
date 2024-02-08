import { Section } from '@/ui'
import './aboutMe.css'

export const AboutMe = () => {
  return (
    <Section id={'about-me'} title={'About Me'}>
      <div className='main-content'>
        <img
          src='https://avatars.githubusercontent.com/u/71116187?v=4'
          alt='picture of bryson palmer'
        />
        <div className='text-block'>
          <p>
            I am a software developer with a strong background in web
            technologies and the frontend. Over the past few years, I&apos;ve
            honed my abilities with JavaScript, ReactJS, Redux, and Material UI.
            With a familiarity for the back end (nodeJs/expressJS or
            Flask/Python) and my collaborative nature, I am an ideal candidate
            on any software team.
          </p>
          <p>
            I&apos;ve contributed to an enterprise level indoor cultivation
            platform by upgrading features and integrating new ones. This was a
            great experience and really shaped my development process. Keeping
            busy now with refining my frontend skills further while branching
            out to new languages and technologies.
          </p>
          <p>
            I am driven to bring integrity, quality, and creativity to all of my
            projects. I have an intrinsic desire to make this world a better
            place for the future by promoting science, equality, and creativity.
            Being a problem solver by nature has brought me to interests in
            software development, Brazilian Jiu Jitsu, and music production.
            Always learning and always moving forward. Here&apos;s to the
            future.
          </p>
        </div>
      </div>
    </Section>
  )
}
