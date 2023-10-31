import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './HomePage.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const firstNameArray = ' Mustafa'.split('')
  const secondNameArray = ' Gelisen'.split('')
  const jobArray = 'Web Developer'.split('')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <AnimatedLetters
              letterClass={letterClass}
              stringArray={firstNameArray}
              index={15}
            />
            <AnimatedLetters
              letterClass={letterClass}
              stringArray={secondNameArray}
              index={20}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              stringArray={jobArray}
              index={23}
            />
          </h1>
          <h2>
            Javascript / Typescript / HTML / CSS / Express.js / Node.js
            / Redux / MongoDB / Next.js / Sass / React
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
