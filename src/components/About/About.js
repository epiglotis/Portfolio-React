import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons'
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
            <AnimatedLetters
              letterClass={letterClass}
              stringArray={'About Me'.split('')}
              index={5}
            />
          </h1>
          <p>
            I am a highly motivated front-end developer with a strong passion
            for innovation and a keen desire to join a reputable IT company. I
            am seeking an opportunity to work on cutting-edge technologies and
            engage in diverse and challenging projects. With a background in
            game programming and recent experience in developing web
            applications, I am ready to contribute my skills to create
            outstanding user experiences.
          </p>
          <p>
            I have a solid foundation in software development, with a year of
            experience as a Game Programmer, during which I honed my
            problem-solving and critical-thinking skills. My transition to web
            application development has enabled me to expand my expertise and
            embrace the dynamic world of web technologies.
          </p>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              stringArray={'Freelance'.split('')}
              index={10}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              stringArray={'Projects'.split('')}
              index={10}
            />
          </h1>
          <a
            href="https://www.bugosolutions.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            • Etsy Seller WebApp{' '}
          </a>
          <br />
          <a
            href="https://github.com/epiglotis/SeraTask"
            target="_blank"
            rel="noopener noreferrer"
          >
            • Greenhouse Task Project / React, MUI, SASS
          </a>

          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              stringArray={'GitHub'.split('')}
              index={15}
            />
            <br/>
            <AnimatedLetters
              letterClass={letterClass}
              stringArray={'Repositories'.split('')}
              index={15}
            />
          </h1>
          <a
            href="https://github.com/epiglotis/Portfolio-React"
            target="_blank"
            rel="noopener noreferrer"
          >
            • This Project's GitHub Repository
          </a>
          <br />
          <a
            href="https://github.com/epiglotis/ExpenseTracker-React"
            target="_blank"
            rel="noopener noreferrer"
          >
            • Expense Tracker / React
          </a>
          <br />
          <a
            href="https://github.com/epiglotis/HotelBookingApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            • Hotel Booking / React, SASS, Express.js, JWT, Node.js, MongoDB
          </a>
          <br />
          <a
            href="https://github.com/epiglotis/WeatherApp-ReactNative"
            target="_blank"
            rel="noopener noreferrer"
          >
            • Weather App / React Native
          </a>
          <br />
          <a
            href="https://github.com/epiglotis/RankingApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            • Ranking App / React, .Net Core
          </a>
          <br />
          <a
            href="https://github.com/epiglotis/QuizApp-NextJS"
            target="_blank"
            rel="noopener noreferrer"
          >
            • Quiz App / React, Next.js, Typescript
          </a>
          <br />
          <a
            href="https://github.com/epiglotis/FourChannelsLive-React"
            target="_blank"
            rel="noopener noreferrer"
          >
            • Four Channels / React, MUI, SASS
          </a>
          <br />
          <a
            href="https://github.com/epiglotis/Webpack-Intro"
            target="_blank"
            rel="noopener noreferrer"
          >
            • Webpack Intro / Webpack
          </a>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faSass} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon
                icon={faHtml5}
                style={{ transform: 'rotate(-90deg)' }}
                color="#F06529"
              />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
