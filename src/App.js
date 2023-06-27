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
import Mainprofile from "./components/Mainprofile";
import Js from "./components/indexxx";
import Mainjobprovider from "./components/jobprovider/mainjobprovider";
function App() {
  return (
    <div className="App">
      {/* <Js /> */}
      <Router>
        <Navbar className="header" />
        <Switch>
          <Route path="/" exact component={Jobseeeker} />
          {/* <Route path="/menu" exact component={Menu} /> */}
          <Route path="/about" exact component={About} />
          <Route path="/Jobprovider" exact component={Mainjobprovider} />

          <Route path="/contact" exact component={Contact} />
          <Route path="/home" exact component={Home} />
          <Route path="/mainprofile" exact component={Mainprofile} />
        </Switch>
        <Route path="/jobseekerlist" exact component={Jobseekerlist} />
      </Router>
      {/* <div style={{ height: "400px" }}>
          <Footer />
        </div> */}
    </div>
  );
}

export default App;
