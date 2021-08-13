import React from 'react'
// import Header from './Header'
import Nav from './Nav';
import Footer from './Footer'
import resume from "../assets/resources/WillM_Resume.pdf"
import FileSaver from 'file-saver'

export default function Layout(props) {

  const { volume, setVolume } = props;
  
  const saveFile = () => {
    FileSaver.saveAs(
      resume,
      "WillM_Resume.pdf"
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
