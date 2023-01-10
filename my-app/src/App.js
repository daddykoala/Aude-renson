
import Main from './container/main/main';
import Header from './container/header/Header';
import Footer from './container/footer/Footer';
import Background  from './components/background/Background';
import './App.css';

function App() {
  return (
    <div className="App">
      
      {/* <Background/> */}
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
