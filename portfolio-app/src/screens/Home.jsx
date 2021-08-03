import React from 'react'
import "./Home.css"
import pick from '../assets/images/pick-logo.png'
import useSound from 'use-sound'
import useKeyboardBindings from '../hooks/useKeyboardBindings'
import drums from '../assets/sounds/drum-sprite-full.wav'


export default function Home() {
  const drumSprite = drums;

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
    }
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

  return (

    <div className="home-container">
      <img src={pick} alt="pick-logo" className="pick" />
      <div className="drum-machine">
        <button aria-label="kick"
          onMouseDown={() => play({ id: 'kick' })}
          className="button is-black is-medium"
        >1</button>
        <button aria-label="snare"
          onMouseDown={() => play({ id: 'snare' })}
          className="button is-black is-medium"
        >2</button>
        <button aria-label="hihat"
          onMouseDown={() => play({ id: 'hihat' })}
          className="button is-black is-medium"
        >3</button>
        <button aria-label="boop"
          onMouseDown={() => play({ id: 'boop' })}
          className="button is-black is-medium"
        >4</button>
        <button aria-label="bigsnare"
          onMouseDown={() => play({ id: 'bigsnare' })}
          className="button is-black is-medium"
        >5</button>
        <button aria-label="crash"
          onMouseDown={() => play({ id: 'crash' })}
          className="button is-black is-medium"
        >6</button>
        <button aria-label="brush"
          onMouseDown={() => play({ id: 'brush' })}
          className="button is-black is-medium"
        >7</button>
        <button aria-label="ride"
          onMouseDown={() => play({ id: 'ride' })}
          className="button is-black is-medium"
        >8</button>
      </div>
      <section className="section">
        Relax... Take A Beat....
        Play 1 - 4 on your keyboard
      </section>
    </div>

  )
}
