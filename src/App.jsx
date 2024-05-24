import { BrowserRouter} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Technologies from "./components/Technologies/Technologies"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import Copyright from "./components/Copyright/Copyright"

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Home/>
      <About/>
      <Technologies/>
      <Projects/>
      <Contact/>
      <Copyright/>
    </BrowserRouter>
  )
}

export default App
