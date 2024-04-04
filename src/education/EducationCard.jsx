import PropTypes from 'prop-types'
import './education.css'

export const EducationCard = ({
  degreeLink='',
  degreeName='',
  degreeText='',
  schoolDescription='',
  schoolLink='',
  schoolName='',
  time='',
  title=''
}) => {
  return (
    <div className='education-card'>
      <div className='education-header'>
        <h2 className='education-title'>{title}</h2>
        <p className='numeral-text'>{time}</p>
      </div>
      <a
        className='education-link'
        href={schoolLink}
        target='_blank'
        rel='noreferrer'
      >
        {schoolName}
      </a>
      <p className='education-text'>
        {schoolDescription}
      </p>
      {degreeLink ? (
        <a
          className='education-link'
          href={degreeLink}
          target='_blank'
          rel='noreferrer'
        >
          {degreeName}
        </a>
      ) : (
        <p className='degree-text'>{degreeText}</p>
      )}
    </div>
  )
}

EducationCard.propTypes = {
  degreeLink: PropTypes.string,
  degreeName: PropTypes.string,
  degreeText: PropTypes.string,
  schoolDescription: PropTypes.string,
  schoolLink: PropTypes.string,
  schoolName: PropTypes.string,
  time: PropTypes.string,
  title: PropTypes.string
}