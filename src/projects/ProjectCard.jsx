import GitHubIcon from '@mui/icons-material/GitHub'
import PixIcon from '@mui/icons-material/Pix'
import Icon from '@mui/material/Icon'
import IconButton from '@mui/material/IconButton'
import PropTypes from 'prop-types'
import './projects.css'

export const ProjectCard = ({
  img='',
  altText='',
  stack=[],
  logo='',
  title='',
  text='',
  github='',
  app='',
}) => {

  const logoLookup = {PixIcon: <PixIcon />}
  const Logo = () => logoLookup[logo]
  const isFinanseer = title === 'Finanseer'
  
  return (
    <div className='project-card-outer'>
      <div className='project-card'>
        <img
          className={`card-img ${isFinanseer ? 'finanseer' : null}`}
          src={img}
          alt={altText}
        />
        <div className='card-content'>
          <div className={`flex-stack ${isFinanseer ? 'finanseer' : null}`}>
            {stack.map(technology => (
              <p key={technology} className='tech-stack'>{technology}</p>
            ))}
          </div>
          <div className='project-title'>
            <Icon className='project-icon'>
              <Logo />
            </Icon>
            <h3>{title}</h3>
          </div>
          <p className='project-text'>
            {text}
          </p>
        </div>
        <div className='card-footer'>
          <a
            className='github-svg'
            href={github}
            target='_blank'
            rel='noreferrer'
          >
            <IconButton aria-label={`link to ${title} app`}>
              <GitHubIcon />
            </IconButton>
          </a>
          <a
            className='project-link'
            href={app}
            target='_blank'
            rel='noreferrer'
          >
            {title}
          </a>
        </div>
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  img: PropTypes.string,
  altText: PropTypes.string,
  stack: PropTypes.arrayOf(PropTypes.string),
  logo: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  github: PropTypes.string,
  app: PropTypes.string,
}