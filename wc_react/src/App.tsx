import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Elo from './pages/Elo'
import Season1 from './pages/Season1'
import Dashboard from "./Dashboard";
import Victors from './pages/Victors';


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
            <Route path="/victors" element={<Victors />} />
            <Route path="/season1" element={<Season1 />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;