
import Main from './container/main/main';
import Header from './container/header/Header';
import Footer from './container/footer/Footer';
import About from './components/About/About';

import { Routes,Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      

      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/qui-suis-je' element={<About/>}></Route>
        {/* <Route path='/parent' element={<About/>}></Route>
        <Route path='/professionel' element={<About/>}></Route>
        <Route path='/contact' element={<About/>}></Route>
        <Route path='/Agenda' element={<About/>}></Route> */}
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
