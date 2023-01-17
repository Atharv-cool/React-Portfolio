import logo from './logo.svg';
import './App.css'; 
import Header from './components/Header';
import Hero from './components/Hero';
import Service from './components/Service';
import Project from './components/Project';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/> 
      <Service/>
      <Project/>
      <About/>
      <Contact/>
      <Footer/>

      
    </div>
  );
}

export default App;
