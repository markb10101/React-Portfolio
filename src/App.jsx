
import About from "./components/About";
import Footer from "./components/Footer";
import Hobbies from "./components/Hobbies";
import NavBar from "./components/NavBar";
import Photograph from "./components/Photograph";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import styles from "./App.module.scss";
import { Link } from 'react-scroll';


function App() {

  

  return (
    <>
    <NavBar />
    <Photograph />
    <About />
    <Skills />
    <Projects/>
    <Hobbies />
    <Footer />
    </>
  );
}

export default App;
