// import React, { useState } from "react";
// import "./NavbarAdmin.scss";
// import { images } from "../../contstans";
// import { ArrowDropDown, Person, Payment, Logout } from "@mui/icons-material";
// import { Button } from "@mui/material";
// import { Link } from "react-router-dom";
// import { Login, Register } from "../../pages";

// const Navbar = (props) => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   window.onscroll = () => {
//     setIsScrolled(window.pageYOffset === 0 ? false : true);
//     return () => (window.onscroll = null);
//   };

//   const [loginShow, setLoginShow] = React.useState(false);
//   const [registerShow, setRegisterShow] = React.useState(false);

//   return (
//     <>
//       <nav className={isScrolled ? "app__navbar scrolled" : "app__navbar"}>
//         <div className="nav__container">
//           <ul className="navbar__links head-text">
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/tv-show">TV Show</Link>
//             </li>
//             <li>
//               <Link to="/movies">Movies</Link>
//             </li>
//             {/* {["Home", "TV Show", "Movie"].map((item) => (
//               <li key={`link-${item}`}>
//                 <a href={`#${item} `}>{item}</a>
//               </li>
//             ))} */}
//           </ul>
//           <div className="nav__logo">
//             <a href="#home">
//               <img src={images.logo} alt="navbar-logo" />
//             </a>
//           </div>
//           {props.isLogin ? (
//             <div className="nav__right">
//               <img src={images.avartar} alt="avatar" />
//               <div className="profile">
//                 <ArrowDropDown className="icon" />
//                 <div className="options">
//                   <Link to="/profile">
//                     <Person className="icon__links" />
//                     Profile
//                   </Link>
//                   <Link to="/pay">
//                     <Payment className="icon__links" />
//                     Pay
//                   </Link>
//                   <div />
//                   <button className="nav-border" onClick={() => props.setIsLogin(false)}>
//                     <Logout className="icon__links" onClick={() => props.setIsLogin(false)} />
//                     Logout
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div className="nav__button">
//               <Button className="login head-text" onClick={() => setLoginShow(true)}>
//                 Login
//               </Button>
//               <Login show={loginShow} onHide={() => setLoginShow(false)} setIsLogin={props.setIsLogin} isLogin={props.isLogin} />
//               <Button className="register head-text" onClick={() => setRegisterShow(true)}>
//                 Register
//               </Button>
//               <Register show={registerShow} onHide={() => setRegisterShow(false)} />
//             </div>
//           )}
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import "./Navbar.scss";
import { images } from "../../contstans";
import { ArrowDropDown, Person, Payment, Logout } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
// import { Login, Register } from "../../pages";
import Login from '../../components/modal/Login';
import Register from '../../components/modal/Register';

const Navbar = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const [loginShow, setLoginShow] = React.useState(false);
  const [registerShow, setRegisterShow] = React.useState(false);


  const [showAddLogin, setShowAddLogin] = useState(false);
  const handleCloseAddLogin = () => setShowAddLogin (false);
  const handleShowAddLogin = () => setShowAddLogin (true);

  const [showAdd, setShowAdd] = useState(false);
  const handleCloseAdd = () => setShowAdd (false);
  const handleShowAdd = () => setShowAdd (true);
  return (
    <>
      <nav className={isScrolled ? "app__navbar scrolled" : "app__navbar"}>
        <div className="nav__container">
          <ul className="navbar__links head-text">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tv-show">TV Show</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            {/* {["Home", "TV Show", "Movie"].map((item) => (
              <li key={`link-${item}`}>
                <a href={`#${item} `}>{item}</a>
              </li>
            ))} */}
          </ul>
          <div className="nav__logo">
            <a href="#home">
              <img src={images.logo} alt="navbar-logo" />
            </a>
          </div>
          {props.isLogin ? (
            <div className="nav__right">
              <img src={images.avartar} alt="avatar" />
              <div className="profile">
                <ArrowDropDown className="icon" />
                <div className="options">
                  <Link to="/profile">
                    <Person className="icon__links" />
                    Profile
                  </Link>
                  <Link to="/pay">
                    <Payment className="icon__links" />
                    Pay
                  </Link>
                  <div />
                  <button className="nav-border" onClick={() => props.setIsLogin(false)}>
                    <Logout className="icon__links" onClick={() => props.setIsLogin(false)} />
                    Logout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="nav__button">
              <Button className="login head-text" onClick={handleShowAddLogin}>
                Login
              </Button>
              <Button className="register head-text" onClick={handleShowAdd}>
                Register
              </Button>
            </div>
          )}
        </div>
      </nav>
      <Register  
      showAdd={showAdd}
      handleCloseAdd={handleCloseAdd}
    />
    <Login  
      showAddLogin={showAddLogin}
      handleCloseAddLogin={handleCloseAddLogin}
    />
    </>
  );
};

export default Navbar;
