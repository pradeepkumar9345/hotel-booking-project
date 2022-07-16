import logo from './logo.svg';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import Login from './components/Login';
import Signup from './components/signup';
import Myprofile from './components/myprofile';
import Mybooking from './components/mybooking';
import Payment from './components/payment';
import Profile from './components/profile';


function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/Myprofile" element={<Myprofile/>}/>
      <Route path="/Mybooking" element={<Mybooking/>}/>
      <Route path="/Payment" element={<Payment/>}/>
      <Route path="/Profile" element={<Profile/>}/>
    </Routes>
    </BrowserRouter>

    // <div>
    //   <Login/>
    // </div>
  );
}

export default App;
