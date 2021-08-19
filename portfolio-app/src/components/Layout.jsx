import React from 'react'
// import Header from './Header'
import Nav from './Nav';
import Footer from './Footer'
import resume from "../assets/resources/Will_Metivier.pdf"
import FileSaver from 'file-saver'
import "./Layout.css"

export default function Layout(props) {

  const { volume, setVolume } = props;
  
  const saveFile = () => {
    FileSaver.saveAs(
      resume,
      "Will_Metivier.pdf"
    );
  }
  
  return (
    <div className="layout-parent">
      <Nav volume={volume} setVolume={setVolume} saveFile={saveFile} />
      <div className="layout-children">{props.children}</div>
      <Footer saveFile={saveFile}/>
    </div>
  )
}
