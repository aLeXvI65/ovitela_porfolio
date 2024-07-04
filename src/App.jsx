import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
  Slideshow
} from './components';

import HomePage from './pages/home';
import SuperHackAttack from './pages/projects/superHackAttack';
import BreakDot from './pages/projects/breakdot';
import ZumoBall from './pages/projects/zumoball';
import PVZ_Demo from './pages/projects/pvz';

const App = () => {

  return (
    <BrowserRouter >
      <div className="relative z-0">
        
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/super_hack_attack" element={<SuperHackAttack />} />
          <Route path="/breakdot" element={<BreakDot />} />
          <Route path="/zumo_ball" element={<ZumoBall />} />
          <Route path="/pvz_demo" element={<PVZ_Demo />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
};

export default App;
