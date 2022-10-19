import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Headlines from './components/Headlines';
import About from './components/About';
import ContactUs from './components/ContactUs';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<><Header/><Headlines/><Footer/></>}/>
    <Route path='/about' element={<><Header/><About/><Footer/></>}/>
    <Route path='/contactus' element={<><Header/><ContactUs/><Footer/></>}/>

  </Routes>
    </>
  );
}

export default App;
