import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Addemployee from './components/Addemployee/Addemployee';
import Viewemployee from './components/viewemployee/Viewemployee';
import Update from './components/update/Update';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path='/addemployee' element={<Addemployee/>}/>
        <Route path='/viewemployee' element={<Viewemployee/>}/>
        <Route path='/updateemployee/:id' element={<Update/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>


        
      </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
