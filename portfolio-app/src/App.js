import './App.css';
import { useState, useEffect } from 'react'
import Home from './screens/Home';
import Projects from './screens/Projects';
import { Switch, Route } from 'react-router-dom'
import About from './screens/About';
import Contact from './screens/Contact';
import Layout from './components/Layout';


function App() {
  const [volume, setVolume] = useState(0.3)



  return (
    <div className="App">
      <Layout volume={volume} setVolume={setVolume}>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home volume={volume} setVolume={setVolume} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
