import './App.css';
import Home from './screens/Home';
import Projects from './screens/Projects';
import { Switch, Route } from 'react-router-dom'
import About from './screens/About';
import Contact from './screens/Contact';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
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
            <Home />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
