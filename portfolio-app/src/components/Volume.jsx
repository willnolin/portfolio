import React, { useState } from 'react'
import volumeIcon from '../assets/images/volume.png'
import volumeMuteIcon from '../assets/images/volume-mute.png'
import "./Volume.css"

export default function Volume(props) {
  const { volume, setVolume } = props;
  const [lastVolume, setLastVolume] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [showMute, setShowMute] = useState('')
  const [showVolume, setShowVolume] = useState('block')

  const handleMute = () => {
    if (isMuted) {
      setVolume(lastVolume)
    } else {
      setVolume(0)
    }

  }

  return (

    <div className="volume-container">
      <img src={volumeIcon} alt="volume" className="volume" style={{ display: showVolume }} onClick={() => {
        setShowVolume('none');
        setShowMute('block');
        setIsMuted(true);
        setLastVolume(volume);
        handleMute();
      }} />
      <img src={volumeMuteIcon} alt="volume-muted" className="volume-mute" style={{ display: showMute }} onClick={() => {
        setShowVolume('block');
        setShowMute('none');
        setIsMuted(false);
        handleMute();
      }} />
    </div>

  )
}
