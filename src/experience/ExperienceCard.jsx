import PropTypes from 'prop-types'
import './experience.css'

/*
  This is a reusable card component for work experience.
  Props expected are:
    position: string for position in company,
    text: array of string(s) for work experience description(s),
    time: string for year(s) worked,
    title: string for company name
*/

export const ExperienceCard = ({
  position = '',
  text = [],
  time = '',
  title = '',
}) => {

  return (
    <div className='experience-card'>
      <div className='experience-header'>
        <h4 className='experience-title'>{title}</h4>
        <div className='experience-role'>
          <i>{position}</i>
          <p className='numeral-text'>{time}</p>
        </div>
      </div>
      <div>
        {text.map((description, index) => (
          <p key={index} className='experience-text'>{description}</p>
        ))}
      </div>
    </div>
  )
}

ExperienceCard.propTypes = {
  position: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.string),
  time: PropTypes.string,
  title: PropTypes.string,
}
