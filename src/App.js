import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header';
import FeatureList from './Components/FeatureList/FeatureList';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Feature from './Components/Feature/Feature';
import DemoReel from './Components/DemoReel/DemoReel';
import Tv from './Components/Tv';
import Game from './Components/Game';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Container">
          <div className="HeaderWrapper"><Header /></div>
          <div className="ContentWrapper">
            <Routes>
              <Route exact path = "/" element={<FeatureList />}/>
              <Route path = "/tv-work" element={<Tv />} />
              <Route path= "/game-work" element={<Game />} />
              <Route path = "/demo-reel" element={<DemoReel />} />
              <Route path = "/about" element={<About />} />
              <Route path="/features/:id" element={<Feature />} />
            </Routes>
          </div>
          <div className="FooterWrapper"><Footer /></div>
        </div>
      </div>
    </Router>
  );
}

export default App;