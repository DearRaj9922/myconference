
import './App.css';
import { HashRouter as Router, Routes,Route } from 'react-router-dom'
import Home from "../src/components/Home/home.js";

function App() {
  return (
      <div className="App">
          <Router>
            <Routes>
            <Route>
              <Route exact={true} path='/' element={<Home />} />
            </Route>
            </Routes>
          </Router>
      </div>
  );
}

export default App;



