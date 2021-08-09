import React, { useState } from 'react'
import "./Home.css"
import pick from '../assets/images/pick-logo.png'
import studio from '../assets/images/will_cover.jpeg'
import logo from '../assets/images/bubble.png'
import useSound from 'use-sound'
import useKeyboardBindings from '../hooks/useKeyboardBindings'
import drums from '../assets/sounds/drum-sprite-full.wav'

import Volume from '../components/Volume'


export default function Home(props) {
  const drumSprite = drums;
  const { volume, setVolume } = props;
  const [showMute, setShowMute] = useState('')
  const [showVolume, setShowVolume] = useState('block')
  // const [drumsActive, setDrumsActive] = useState(false)
  const [showStartButton, setShowStartButton] = useState('block')
  const [showDrumMachine, setShowDrumMachine] = useState('none');
  const [isMuted, setIsMuted] = useState(false);

  const [play] = useSound(drumSprite, {
    sprite: {
      kick: [0, 500],
      snare: [2000, 750],
      hihat: [4000, 500],
      boop: [6000, 500],
      bigsnare: [8000, 600],
      crash: [10000, 750],
      brush: [12000, 500],
      ride: [14000, 500],
      letsGo: [16000, 1000],
    },
    volume

  })


  useKeyboardBindings({
    1: () => play({ id: 'kick' }),
    2: () => play({ id: 'snare' }),
    3: () => play({ id: 'hihat' }),
    4: () => play({ id: 'boop' }),
    5: () => play({ id: 'bigsnare' }),
    6: () => play({ id: 'crash' }),
    7: () => play({ id: 'brush' }),
    8: () => play({ id: 'ride' }),
  })

  const handleShowDrums = () => {
    setShowStartButton('none')
    setShowDrumMachine('flex')
  }


  const handleChange = (e) => {
    if (e.target.value !== 0) {
      setVolume(e.target.value / 100)
      setShowVolume('block')
      setShowMute('')
      setIsMuted(false);
    } else {
      setVolume(e.target.value / 100)
      setShowMute('block')
      setShowVolume('')
      setIsMuted(true);
    }
  }

  return (

    <div className="home-container">
      <div className="top-row">
        <img src={logo} alt="bubble" className="bubble" /> <p className="home-title">Will Metivier</p>
      </div>
      <div className="top-row">
        <h1 className="sub">Software Engineer</h1>
      </div>
      <div className="top-row">
        <img src={studio} alt="in-the-studio" className="top-photo" />
      </div>
      <div className="top-row">
        <img src={pick} alt="pick-logo" className="pick" />
      </div>

      <button className="button is-outlined is-black" onClick={

        () => {
          play({ id: 'letsGo' })
          handleShowDrums()
        }

      } style={{ display: showStartButton }}>Launch Drum Machine</button>

      <div className="drum-machine-and-volume-container" style={{ display: showDrumMachine }}>
        <div className="drum-machine">
          <div className="drum-button-row">
            <button aria-label="kick"
              onMouseDown={() => play({ id: 'kick' })}
              className="button is-black is-medium drums"
            >1</button>
            <button aria-label="snare"
              onMouseDown={() => play({ id: 'snare' })}
              className="button is-black is-medium drums"
            >2</button>
            <button aria-label="hihat"
              onMouseDown={() => play({ id: 'hihat' })}
              className="button is-black is-medium drums"
            >3</button>
            <button aria-label="boop"
              onMouseDown={() => play({ id: 'boop' })}
              className="button is-black is-medium drums"
            >4</button>
          </div>
          <div className="drum-button-row">
            <button aria-label="bigsnare"
              onMouseDown={() => play({ id: 'bigsnare' })}
              className="button is-black is-medium drums"
            >5</button>
            <button aria-label="crash"
              onMouseDown={() => play({ id: 'crash' })}
              className="button is-black is-medium drums"
            >6</button>
            <button aria-label="brush"
              onMouseDown={() => play({ id: 'brush' })}
              className="button is-black is-medium drums"
            >7</button>
            <button aria-label="ride"
              onMouseDown={() => play({ id: 'ride' })}
              className="button is-black is-medium drums"
            >8</button>
          </div>
        </div>
        <section className="section">
          <p className="drum-machine-text">1
            ...Try Your Number Pad...
          </p>

        </section>

        <div className="volume-slider-container">

          <Volume volume={volume} setVolume={setVolume}
            showVolume={showVolume} setShowVolume={setShowVolume}
            showMute={showMute} setShowMute={setShowMute}
            handleChange={handleChange} isMuted={isMuted}
            setIsMuted={setIsMuted}/>
          {/* <input type="range" id="volume-control" onChange={(e) => handleChange(e)} className="slider"></input> */}
        </div>
      </div>
      <br />
      <br />
    </div>

  )
}
