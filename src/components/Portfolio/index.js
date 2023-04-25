import React, { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import { Link } from "react-router-dom";
import Weather from "../../assets/images/Weather.png";
import DND from "../../assets/images/DND.png";
import JATE from "../../assets/images/Jate.png";
import PWG from "../../assets/images/PasswordGen.png";
import WDS from "../../assets/images/WDS.png";
import Quiz from "../../assets/images/QuizGame.png";
import PresentPear from "../../assets/images/PresentPear.png";
import Hello from "../../assets/images/Hello.png";
import "./index.scss";

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });

  const renderPortfolio = (portfolio) => {
    return (
      <div class="image-box">
        <Link to="https://hello--stranger.herokuapp.com/">
          <p class="title">Hello stranger</p>
          <p class="description">
            {" "}
            A simple application where users can share life stories.
          </p>
          <br></br>
          <img src={Hello} class="portfolio-image"></img>
        </Link>
        <Link to="https://thetruegamebreaker.github.io/Weather-API-Project-Fixed/">
          <p class="title">Weather App</p>
          <p class="description">
            A basic application that allows you to look up a city and get{" "}
            <br></br> the 5 day weather forcast.
          </p>
          <img src={Weather} class="portfolio-image"></img>
        </Link>
        <Link to="https://thetruegamebreaker.github.io/DND-Character-Generator/">
          <p class="title">DnD Character Generator</p>
          <p class="description">
            A quick and easy dungeons and dragons character generator.
          </p>{" "}
          <br></br>
          <img src={DND} class="portfolio-image"></img>
        </Link>
        <Link to="https://pwa-davis-genthner.herokuapp.com/">
          <p class="title">Text Editor</p>
          <p class="description"> Just anothe text editor.</p>
          <img src={JATE} class="portfolio-image"></img>
        </Link>
        <Link to="https://thetruegamebreaker.github.io/DavisGenthnerPasswordGenerator/">
          <p class="title">Password Generator</p>
          <p class="description">
            A password generator with many options for customization.
          </p>
          <img src={PWG} class="portfolio-image"></img>
        </Link>
        <Link to="https://thetruegamebreaker.github.io/DavisGenthnerDailyPlanner/">
          <p class="title">Work Day Planner</p>
          <p class="description">A simple daily planner.</p>
          <img src={WDS} class="portfolio-image"></img>
        </Link>
        <Link to="https://thetruegamebreaker.github.io/Quiz-game/">
          <p class="title">Coding Quiz Game</p>
          <p class="description">
            A very basic coding quiz game. I made this when I was just <br></br>{" "}
            beggining so please forgive the easy questions and poor design
          </p>
          <img src={Quiz} class="portfolio-image"></img>
        </Link>
        <Link to="https://present-pear.herokuapp.com/">
          <p class="title">Present Pear</p>
          <p class="description">
            {" "}
            A application that lets you anonymously <br></br> register to give
            and recive gifts
          </p>
          <img src={PresentPear} class="portfolio-image"></img>
        </Link>
      </div>
    );
  };

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Portfolio".split("")}
            idx={15}
          />
        </h1>
        <h2>
          All Images are clickable and will take you to a deployed version of
          the Project
        </h2>
        <div>{renderPortfolio(portfolio)}</div>
      </div>
    </>
  );
};

export default Portfolio;
