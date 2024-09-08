import './App.css';
import Header from "./component/Header";
import Home from "./component/Home";
import Experience from "./component/Experience";
import SNS from "./component/SNS";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/SNS" element={<SNS />} />
          
          <Route path="/profile" element={
            <Link to="/">Click here to see my profile</Link>
          }/>
          
        </Routes>
      </div>
    </Router>
    )
}

export default App;