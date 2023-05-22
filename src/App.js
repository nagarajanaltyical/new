import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jobseeeker from "./Job seeker/Jobseeeker";
import Jobseekerlist from "./Job seeker/jobseekerlist";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Jobseeeker} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/home" exact component={Home} />
        </Switch>
        <Route path="/jobseekerlist" exact component={Jobseekerlist} />

        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
