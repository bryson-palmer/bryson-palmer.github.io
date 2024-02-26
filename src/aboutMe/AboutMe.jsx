import { Section } from '@/ui'
import './aboutMe.css'

export const AboutMe = () => {
  return (
    <Section id={'about-me'} title={'About Me'}>
      <div className='main-content'>
        <img
          src='/assets/profile-pic.jpg'
          alt='picture of bryson palmer'
        />
        <div className='text-block'>
          <p>
            As a dedicated <strong className='blue-text'>frontend</strong> developer, I specialize in crafting immersive digital experiences that seamlessly blend innovation and user-centric design. My journey in software development has been anchored by a passion for web technologies and the frontend ecosystem.
          </p>
          <p>
            With a competency for JavaScript and many of it&apos;s frameworks and libraries, I thrive on the dynamic landscape of modern web development. While my focus remains steadfast on frontend mastery, I possess a nuanced understanding of backend technologies like Node.js/Express.js and Flask/Python, enriching my collaborative prowess within software teams.
          </p>
          <p>
            My recent endeavors include enhancing an enterprise-grade indoor cultivation platform, elevating its functionality through strategic upgrades and seamless integrations. This invaluable experience has not only refined my development acumen but also instilled a meticulous approach to project execution.
          </p>
          <p>
            In embracing the ever-evolving landscape of technology, I harness the power of AI tools to expedite development processes without compromising quality. By seamlessly integrating AI-driven solutions into my workflow, I ensure efficient project delivery while staying at the forefront of innovation.
          </p>
          <p>
            Committed to perpetual learning and forward momentum, I am poised to embark on the next chapter of my journey, armed with a steadfast resolve to push boundaries, drive progress, and leave an indelible mark on the digital landscape.
          </p>
          <p>Here&apos;s to a future defined by endless possibilities and unparalleled innovation.</p>
        </div>
      </div>
    </Section>
  )
}
