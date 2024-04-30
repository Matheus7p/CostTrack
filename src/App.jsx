import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Contact from "./components/pages/Contact/Contact";
import Company from "./components/pages/Company/Company";
import NewProject from "./components/pages/NewProject/NewProject";
import Container from "./components/layout/Container/Container";
import NavBar from "./components/layout/NavBar/NavBar";
import Footer from "./components/layout/Footer/Footer";
import Projects from "./components/pages/Projects/Projects";



function App() {
  return (

    <Router>
      <NavBar />

      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/company" element={<Company />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/newproject" element={<NewProject />} />
          <Route exact path="/projects" element={<Projects/>} />
        </Routes>
      </Container>
      <Footer />
    </Router>

  );
}

export default App;
