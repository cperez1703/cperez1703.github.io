import { BrowserRouter} from "react-router-dom"
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";
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
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles/>
          <Navbar/>
          <Home/>
          <About/>
          <Technologies/>
          <Projects/>
          <Contact/>
          <Copyright/>
        </>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
