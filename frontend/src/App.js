import './App.css';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Technology from './components/Technology/Technology';
import Project from './components/Projects/Project.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx';
function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Technology />
      <Project />
      <ContactUs />
    </div>
  );
}

export default App;
