import { PropTypes } from 'prop-types'
import './section.css'

export const Section = ({ children, id='', title='' }) => {
  return (
    <section id={id} className='section-main'>
      <h2 className='section-title'>{title}</h2>
      <div className='section-body'>
        {children}
      </div>
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  title: PropTypes.string
}