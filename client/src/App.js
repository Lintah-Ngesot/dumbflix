import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Home, DetailSeries, DetailMovies, Movies, Series, Register, Pay } from "./pages";
import ListFilm from '../src/pages/ListFilm/ListFilm';
import AddFilm from '../src/pages/AddFilm/AddFilm';
import { useState } from "react";
import { Navbar, Profile } from "../src/components";
import DetailFilm from "../src/pages/DetailFilm/DetailFilm";
import ListTransaction from "../src/pages/ListTransaction/ListTransaction";
// import NavbarAdmin from "./components/Navbar/NavbarAdmin/NavbarAdmin";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (

      <div className="App">
        {/* <Navbar setIsLogin={setIsLogin} isLogin={isLogin} /> */}
        {/* <NavbarAdmin setIsLogin={setIsLogin} isLogin={isLogin} /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/movies" element={<Movies s/>} />
          <Route path="/tv-show" element={<Series />} />
          <Route path="/detail-series" element={<DetailSeries />} />
          <Route path="/detail-movies" element={<DetailMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/list-film" element={<ListFilm />} />
          <Route path="/add-film" element={<AddFilm />} />
          <Route path="/detail-film" element={<DetailFilm />} />
          <Route path="/list-transaction" element={<ListTransaction />} />
        </Routes>
      </div>
  );
}

export default App;
