import React from 'react'
// import Header from './Header'
import Nav from './Nav';
import Footer from './Footer'

export default function Layout(props) {

  const { volume, setVolume } = props;

  return (
    <div className="layout-parent">
      <Nav volume={volume} setVolume={setVolume} />
      <div className="layout-children">{props.children}</div>
      <Footer />
    </div>
  )
}
