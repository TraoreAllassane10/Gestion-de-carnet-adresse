import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router';
import Home from './pages/Home';
import Add from './pages/Add';
import Edit from './pages/Edit';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/edit' element={<Edit/>}/>
      </Routes>
    </Router>
  )
}

export default App
