import './App.css';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Technology from './components/Technology/Technology';
import Project from './components/Projects/Project.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx';
import ExperienceTimeline from './components/Experience/Experience.jsx';
function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Technology />
      <Project />
      <ExperienceTimeline />
      <ContactUs />
    </div>
  );
}

export default App;
