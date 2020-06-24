// import logo from "./logo.svg";
import "./App.css";
import FitnessRoutes from "./components/routes/Routes";
// import UserSignup from "./users/userSignup";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Homepage from "./components/homepage";
import Classes from "./components/classes";
import UserSignup from "./users/userSignup";
import UserLogin from "./users/userLogin";



function App() {
  return (
    <div className="App">
      <h2>Anywhere Fitness</h2>

      {/* <Route exact path="/" component={Homepage} />
      <Route path="/classes" component={Classes} />
      <Route path="/userSignup" component={UserSignup} />
      <Route path="/userLogin" component={UserLogin} />
      <Route path="/homePage" component={Homepage} /> */}

      {/* <Homepage /> */}
      <FitnessRoutes />
    </div>
  );
};


export default App;
