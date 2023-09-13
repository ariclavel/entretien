import logo from './logo.svg';
import './App.css';
import Home from "../src/pages/home";
import Login from "../src/pages/login";
import Schedule from "../src/pages/schedule";
import ShowMeetings from "../src/pages/showMeetings";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      
      <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/schedule" element={<Schedule />} />
        <Route path="/home/showMeetings" element={<ShowMeetings />} />
      </Routes>
    </Router>
    </div>

  );
}

export default App;
