import React,{useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import authActions from "./redux/actions/authActions";
import Profile from "./pages/Profile"
import "./App.css";
import "./Sign.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Game from "./pages/Game";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About"
import Games from "./pages/Games"
import AdminPanel from './pages/AdminPanel'

function App() {

  const dispatch = useDispatch()

  const user = useSelector(state => state.userReducer.user)
  
  const token = localStorage.getItem('token')


  useEffect(() => {
    token && dispatch(authActions.signInWithToken(token))
  }, [])


  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/game/:id" element={<Game/>}></Route>
            {!user && <Route path="/signin" element={<SignIn />}></Route>}
            {!user && <Route path="/signup" element={<SignUp />}></Route>}
            <Route path="/about" element={<About />}></Route>
            <Route path="/games" element={<Games />}></Route>
            <Route path="/admin" element={<AdminPanel />}></Route>
            <Route path="*" element={<Home />}></Route>
            <Route path="profile" element={<Profile/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
