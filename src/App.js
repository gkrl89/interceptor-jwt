import logo from './logo.svg';
import './App.css';
import UserLogin from './User/Login';
import UserHome from './User/USerHome';
import Home from './User/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>

    <Routes>
    <Route path="/" element={<Home/>} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/USerHome" element={<UserHome />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
