import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Elo from './pages/Elo'
import Season1 from './pages/Season1'
import Season2 from './pages/Season2'
import Season3 from './pages/Season3'
import Season4 from './pages/Season4'
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
            <Route path="/season2" element={<Season2 />} />
            <Route path="/season3" element={<Season3 />} />
            <Route path="/season4" element={<Season4 />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;