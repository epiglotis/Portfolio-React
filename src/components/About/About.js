import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './About.scss'
const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters letterClass={letterClass} stringArray={'About Me'.split('')} index={5} />
        </h1>
        <p>
          I'm a very ambitious front-end developer looking for a role in an
          established IT company with the opportunity to work with the latest
          technologies on challenging and diverse projects.
        </p>
        <p>
          I'm quiet confident, naturally curious, and perpetually working on
          improving my chops one design problem at a time.
        </p>
        <p>
          Previously worked as a Game Programmer for a year. Lately I am developing
          web applications and accepting job offers.
        </p>
        <br></br>
        <br></br>
        <br></br>
        <h1>
          <AnimatedLetters letterClass={letterClass} stringArray={'Projects'.split('')} index={10} />
        </h1>
        <a href='https://epiglotis.github.io/ExpenseTracker-React/' target="_blank">• Expense Tracker </a>
        <br></br>
        <br></br>
        <br></br>
        <h1>
          <AnimatedLetters letterClass={letterClass} stringArray={'GitHub Repositories'.split('')} index={15} />
        </h1>
        <a href='https://github.com/epiglotis/Portfolio-React' target="_blank">• This Project's GitHub Repository</a>
        <br></br>
        <a href='https://github.com/epiglotis/ExpenseTracker-React' target="_blank">• GitHub Repository</a>
      </div>

      <div className='stage-cube-cont'>
        <div className='cubespinner'>
            <div className='face1'>
                <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
            </div>
            <div className='face2'>
                <FontAwesomeIcon icon={faHtml5} style = {{transform: 'rotate(-90deg)' }} color="#F06529"/>
            </div>
            <div className='face3'>
                <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
            </div>
            <div className='face4'>
                <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
            </div>
            <div className='face5'>
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
            </div>
            <div className='face6'>
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
            </div>
        </div>

      </div>
    </div>
    <Loader type='pacman'/>
    </>
  )
}

export default About
