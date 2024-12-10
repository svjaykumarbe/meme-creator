import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/AppBar';
import Home from './pages/Home';
import MemeCreator from './pages/MemeCreator';
import About from './pages/About';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meme-creator" element={<MemeCreator />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;