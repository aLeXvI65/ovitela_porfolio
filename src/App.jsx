import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
} from './components';

import HomePage from './pages/home';
import SuperHackAttack from './pages/projects/superHackAttack';
import BreakDot from './pages/projects/breakdot';
import ZumoBall from './pages/projects/zumoball';

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
        </Routes>
        
      </div>
    </BrowserRouter>
  );
};

export default App;
