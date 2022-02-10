import React from "react";
import "./AboutPage.css";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import Fade from "react-reveal/Fade";
import animationData from "../../images/lotties/female.json";
import { HTMLIcon, CodeBracesIcon, WebIcon } from "../../images/icons/icons";

const AboutPage = () => {
  return (
    <section className="about-page">
      <header className="about-page__header">
        <h1 className="about-page__heading about-page__heading--main">
          Ezekiel Nwoye
        </h1>
      </header>
      <div className="about-page__body">
        <div className="about-page__content">
          <div className="about-page__content-left">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: animationData,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              style={{ maxWidth: 300 }}
              height="auto"
            />
          </div>
          <div className="about-page__content-right">
            <Fade bottom>
              <p className="about-page__text about-page__text--restricted">
                <strong className="about-page__text--bold"> Who am I? </strong>
                <ul className="about-page__list">
                  <li className="about-page__list-item">
                    A dedicated and solution-oriented software developer with
                    years of experience in designing and creating clean,
                    responsive, and interactive websites and web applications.
                  </li>
                  <li className="about-page__list-item">
                    I bring creative and innovative ideas to life through unique
                    software solutions to solve problems.
                  </li>

                  <li className="about-page__list-item">
                    Currently displaying my expertise at{" "}
                    <a
                      href="https://minerva.ng/"
                      target="_blank"
                      className="about-page__link"
                    >
                      {" "}
                      <b>Minerva Technologies</b>
                    </a>
                  </li>
                </ul>
              </p>
              <div className="about-page__text">
                <strong className="about-page__text--bold"> What I do? </strong>
                <div className="about-page__services">
                  <a
                    href="https://blog.udacity.com/2014/12/front-end-vs-back-end-vs-full-stack-web-developers.html"
                    target="_blank"
                    className="about-page__services-link"
                  >
                    <HTMLIcon className="about-page__services-icon" />
                    <span className="about-page__services-text">
                      Front-End Web Development
                    </span>
                  </a>
                </div>
              </div>

              <p className="about-page__text about-page__text--restricted">
                I'm super excited you're here. Feel free to{" "}
                <Link to="/contact" className="about-page__link">
                  <b>reach out to me{" "}</b>
                </Link>
                with any project ideas you have or to just say hello!
              </p>
            </Fade>{" "}
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default AboutPage;
