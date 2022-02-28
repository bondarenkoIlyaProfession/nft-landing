import React, { useState, useEffect } from "react";
import scrollreveal from "scrollreveal";

import "./scss/style.scss";

import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { Free } from "./components/Free/Free";
import { Clients } from "./components/Clients/Clients";
import { SuperRare } from "./components/SuperRare/SuperRare";
import { Release } from "./components/Release/Release";
import { Like } from "./components/Like/Like";
import { SignUp } from "./components/SignUp/SignUp";
import { Footer } from "./components/Footer/Footer";


export const App = () => {
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark")
  }

  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distanse: "80px",
        duration: 1000,
        reset: false,
      });

      sr.reveal(`
          .nav,.home,.free,.clients,.super-rare,.releases,.like,.signup,.footer
        `,
        { interval: 500 }
      );
    }
    registerAnimations();
  }, []);

  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].style.transform = "none";

    const nav = document.getElementsByClassName("nav");
    nav[0].style.transform = "none";
  }, 1500)

  return (
    <div className="app-container" data-theme={theme}>
      <ScrollToTop />
      <Navbar changeTheme={changeTheme} currentTheme={theme} />
      <Home />
      <Free />
      <Clients />
      <SuperRare />
      <Release />
      <Like />
      <SignUp />
      <Footer />
    </div>
  )
}