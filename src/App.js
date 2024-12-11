import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar'; // Make sure the path is correct
import Home from './pages/Home';
import MemeCreator from './pages/MemeCreator'; 
import About from './pages/About';
import HomeEditor from './components/HomeEditor'; // Import HomeEditor correctly

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-editor" element={<HomeEditor />} /> {/* Ensure this is correct */}
        <Route path="/meme-creator" element={<MemeCreator />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;