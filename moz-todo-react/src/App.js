import logo from './logo.svg';
import './App.css';
import Home from "../src/pages/home";
import Schedule from "../src/pages/schedule";
import ShowMeetings from "../src/pages/showMeetings";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/showMeetings" element={<ShowMeetings />} />
      </Routes>
    </Router>
    </div>

  );
}

export default App;
