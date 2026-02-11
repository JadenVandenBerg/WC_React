import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Elo from './pages/Elo'
import Season1 from './pages/Season1'

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Router>
        <Routes>
            <Route path="/" element={<Elo />} />
            <Route path="/season1" element={<Season1 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;