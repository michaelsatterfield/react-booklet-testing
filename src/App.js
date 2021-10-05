import logo from './logo.svg';
import section1 from './images/section1.png'
import './App.css';
import { ParallaxBanner} from "react-scroll-parallax";
import { Parallax } from 'react-scroll-parallax';
import {Fade} from "react-reveal";
import SectionOne from "./components/SectionOne";


const ParallaxImage = () => (
    <Parallax className="custom-class" y={[-10, 20]}   tagOuter="figure">

        <Fade left>
        <h1>Hello</h1>
        <img src={logo}/>
        <img src={logo}/>
        </Fade>


    </Parallax>
);





function App() {

  return (
    <div className="App">
        <Parallax y={[0,30]} >
        <SectionOne/>
        </Parallax>
      <ParallaxImage/>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>


    </div>
  );
}

export default App;
