import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className='Container'>
        {/* <Header />  */}
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
