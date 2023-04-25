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
      <div class="image-box" style={{columnCount: 3}}>
        <Link to="https://thetruegamebreaker.github.io/Weather-API-Project-Fixed/">
          <img src={Weather} class="portfolio-image"></img>
        </Link>
        <Link to="https://thetruegamebreaker.github.io/Weather-API-Project-Fixed/">
          <img src={DND} class="portfolio-image"></img>
        </Link>
        <Link to="https://thetruegamebreaker.github.io/Weather-API-Project-Fixed/">
          <img src={JATE} class="portfolio-image"></img>
        </Link>
        <Link to="https://thetruegamebreaker.github.io/Weather-API-Project-Fixed/">
          <img src={PWG} class="portfolio-image"></img>
        </Link>
        <Link to="https://thetruegamebreaker.github.io/Weather-API-Project-Fixed/">
          <img src={WDS} class="portfolio-image"></img>
        </Link>
        <Link to="https://thetruegamebreaker.github.io/Weather-API-Project-Fixed/">
          <img src={Quiz} class="portfolio-image"></img>
        </Link>
        <Link to="https://thetruegamebreaker.github.io/Weather-API-Project-Fixed/">
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
        <div>{renderPortfolio(portfolio)}</div>
      </div>
    </>
  );
};

export default Portfolio;
