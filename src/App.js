import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Destination from './components/Destination/Destination';
import { createContext, useContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser)
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router >
      <div className="App">
      <Header></Header>
      
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <PrivateRoute path="/destination/:vehicleId">
          <Destination></Destination>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
      </Switch>
      
      </div>
      
      
    </Router>
    </UserContext.Provider>
  );
}

export default App;
