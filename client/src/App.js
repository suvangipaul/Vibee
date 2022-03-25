import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home, Dashboard, Profile } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
    </div>
  );
}

export default App;
