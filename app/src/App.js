import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard";
import Preferences from "./components/Preferences/Preferences";
import Login from "./components/Security/Login";
import Logout from "./components/Security/Logout";
import MatchList from "./components/Matches/MatchList";
import UserList from "./components/UserManager/UserList";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  if(!token) {
    return (
    <Routes>
      <Route path="/login" element={<Login setToken={setToken} />} />
    </Routes>);  
  }
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <header className="App-header">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/matches" element={<MatchList />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </header>
    </div>
  );
}

function Home() {
  return(
    <>
      <Logout />
    </>
  );
}

export default App;
