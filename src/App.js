import {ToastContainer} from "react-toastify"
import './App.css';
import Home from './Comoponents/Home';
import {Switch,Route} from "react-router-dom"
import Login from './Comoponents/Login';
import Profile from "./Comoponents/Profile";
import { useEffect, useState } from "react";



function App() {
  const [data,setData] = useState([]);
  const [match ,setMatch] = useState(true);

  useEffect(()=>{
    sessionStorage.setItem('match',match);
  },[match])

  return (
    <div className="App">
        <ToastContainer />
        
        <Switch>
            <Route exact path="/">
            {match ? <Home setMatch={setMatch} /> : <h1>Can't access</h1>} 
            </Route>
            <Route exact path="/login">
              <Login setData = {setData} />
            </Route>
            <Route exact path="/profile">
              <Profile data={data} />
            </Route>
        </Switch>
    </div>
  );
}

export default App;
