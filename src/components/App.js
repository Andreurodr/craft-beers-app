import "../styles/App.css";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import BeerList from "./BeerList/BeerList";
import Navbar from "./NavBar/Navbar";
import Profile from "./Profile/Profile";
import Login from "./Login/Login";
import NotFound from "./NotFoundPage/NotFound";
import { color } from "./Context/themeContext";


const userList = [
  {
    email: "tony@upgrade-beer.com",
    password: "123456",
    name: "Tony",
    favouriteBeer: "Pale Ale",
    image: "https://xsgames.co/randomusers/assets/avatars/male/25.jpg"
  },
  {
    email: "john@upgrade-beer.com",
    password: "123456",
    name: "John",
    favouriteBeer: "Stout",
    image: "https://xsgames.co/randomusers/assets/avatars/male/29.jpg"
  },
  {
    email: "sarah@upgrade-beer.com",
    password: "123456",
    name: "Sarah",
    favouriteBeer: "Double IPA",
    image: "https://xsgames.co/randomusers/assets/avatars/female/32.jpg"
  },
  {
    email: "charles@upgrade-beer.com",
    password: "123456",
    name: "Charles",
    favouriteBeer: "Amber Ale",
    image: "https://xsgames.co/randomusers/assets/avatars/male/40.jpg"
  },
  {
    email: "katherine@upgrade-beer.com",
    password: "123456",
    name: "Katherine",
    favouriteBeer: "Blonde Ale",
    image: "https://xsgames.co/randomusers/assets/avatars/female/18.jpg"
  },
];

function App() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState("");
  const [beers, setBeers] = useState([]);
  const [theme, setTheme] = useState(false)

  const handleClick = (ev) => {
    setTheme(ev.target.checked)
  }
  
  useEffect(()=>{
    fetch("https://api.punkapi.com/v2/beers")
    .then((response) => response.json())
    .then((data) => {
      setBeers(data);
    })
  }, [])


  const loginUser = (formData, prevRoute) => {
    const existUser = userList.find((user)=> user.email === formData.email && user.password === formData.password)
  
    if (existUser){
      setUser(existUser) 
      setLoginError("")
      navigate(prevRoute || "/") 
  
    } else {
      setUser(false) 
      setLoginError("Usuario o contraseña incorrecta")
    }
  }

  const logoutUser = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <div className={theme ? "white" : "black"}>
      <form className="theme" action="">
        <label>Day/Dark mode</label>
        <input type='checkbox' name="colorTheme" onChange={handleClick} checked={theme}/>
      </form>
      <color.Provider value={theme}>
      <Navbar user={user} logoutUser={logoutUser}/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile"
          element={ user ? 
            <Profile user={user}/> : null}
        />
        <Route
          path="/list"
          element={
            <BeerList beers={beers}/>}

        />
        <Route path="contact"
          element={<Contact/>}
        />
        <Route
          path="/login"
          element={<Login loginUser={loginUser} loginError={loginError} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </color.Provider>
    </div>
  );
}

export default App;
