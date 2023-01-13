
import MainWelcome from './container/main/MainWelcome';
import MainAbout from './container/main/MainAbout';
import MainOffer from './container/main/MainOffer';
import MainOfferPro from './container/main/MainOfferpro';
import MainContact from './container/main/MainContact';
import MainAgenda from './container/main/MainAgenda';
import Footer from './container/footer/Footer';
import Header from './container/header/Header';




import { Routes,Route } from 'react-router-dom'
import './App.css';


function App() {
  return (
    <div className="App">
      

      <Header/>

      <Routes>
        <Route path='/' element={<MainWelcome/>} ></Route>
        <Route path='/qui-suis-je' element={<MainAbout/>}></Route>
        <Route path='/parent' element={<MainOffer/>}></Route>
        <Route path='/professionel' element={<MainOfferPro/>}></Route>
        <Route path='/contact' element={<MainContact/>}></Route>
        <Route path='/Agenda' element={<MainAgenda/>}></Route>
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
