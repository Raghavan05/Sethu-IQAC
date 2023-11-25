import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Iqac from './Iqac/Iqac'

import './App.css';

function App() {
  return (
    <>
      <>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Iqac />} />
                </Routes>
            </Router>
        </>
    </>
  );
}

export default App;
