import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import NavBar from "../components/NavBar";
import Protect from "../components/Protect";
import Menu from "../pages/Menu";
import Cart from "../pages/Cart";
import ThankYou from "../pages/ThankYou";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route
            path='/'
            element={
              <Protect>
                <Home />
              </Protect>
            }
          />

          <Route
            path='/cart'
            element={
              <Protect>
                <Cart />
              </Protect>
            }
          />
          <Route
            path='/menu'
            element={
              <Protect>
                <Menu />
              </Protect>
            }
          />
          <Route
            path='/thank-you'
            element={
              <Protect>
                <ThankYou />
              </Protect>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
