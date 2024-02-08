import { PropTypes } from 'prop-types'
import './section.css'

export const Section = ({ children, id='', title='' }) => {
  return (
    <section id={id} className='main-section'>
      <h2 className='section-title'>{title}</h2>
      {children}
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  title: PropTypes.string
}