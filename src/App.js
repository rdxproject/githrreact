import './App.css';
import {Routes, Route } from "react-router-dom";
import Home from './Comp/Home/Home';
import About from './Comp/About/About';
import Edit from './Comp/Edit/Edit';

function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/edt" element={<Edit/>} />
      </Routes>
    </div>
  );
}

export default App;
