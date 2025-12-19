import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Modules from './pages/Modules';
import Roles from './pages/Roles';
import Drills from './pages/Drills';
import SkillsMap from './pages/SkillsMap';
import Search from './pages/Search';
import Progress from './pages/Progress';
import References from './pages/References';
import Layout from './components/Layout';

const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/modules" element={<Modules />} />
      <Route path="/roles" element={<Roles />} />
      <Route path="/drills" element={<Drills />} />
      <Route path="/skills" element={<SkillsMap />} />
      <Route path="/search" element={<Search />} />
      <Route path="/progress" element={<Progress />} />
      <Route path="/references" element={<References />} />
    </Routes>
  </Layout>
);

export default App;
