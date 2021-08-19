import './App.css';
import { useState, useEffect} from 'react'  
import Home from './screens/Home';
import Projects from './screens/Projects';
import About from './screens/About';
import Contact from './screens/Contact';
import Layout from './components/Layout';
import AOS from 'aos';
import "aos/dist/aos.css"

function App() {
  const [volume, setVolume] = useState(0.2)
  
  useEffect(() => {
    AOS.init({duration: 2000});
  }, [])

 

  return (
    <div className="App">
      <Layout volume={volume} setVolume={setVolume} >
        <section id="home"><Home volume={volume} setVolume={setVolume} /></section>
        <section id="projects"> <Projects /></section>
        <section id="about"><About /></section>
        <section id="contact"><Contact  /></section>
      </Layout>
    </div>
  );
}

export default App;
