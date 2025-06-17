import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Add from './pages/Add';
import Edit from './pages/Edit';
import Login from './pages/Auth/login';
import Signup from './pages/Auth/Signup';
import Favoris from './pages/Favoris';
import Recent from './pages/Recent';
import Corbeille from './pages/Corbeille';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        <Route path='/home' element={<Home />} />
        <Route path='/add' element={<Add />} />
        <Route path='/edit' element={<Edit />} />
        <Route path='/favoris' element={<Favoris />} />
        <Route path='/recent' element={<Recent />} />
        <Route path='/corbeille' element={<Corbeille />} />
      </Routes>
    </Router>
  )
}

export default App
