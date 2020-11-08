import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";

const aboutContent = {
  name: "Bert Diego Caivano",
  avatarImage: "/images/bert_1.png",
  content:
    "I specialize UX/UI Design and Front End Development. I call Los Angeles, California my home and have worked in various industries at companies of all sizes. I take pride in being able to work in a variety of different projects including design, development, and illustration. I currently reside at VS Media but am always open to freelance opportunities.",
};

const progressData = [
  {
    id: 1,
    title: "Development",
    percantage: 96,
    progressColor: "#FFD15C",
  },
  {
    id: 2,
    title: "UI/UX Design",
    percantage: 91,
    progressColor: "#FF4C60",
  },
  {
    id: 3,
    title: "Marketing",
    percantage: 73,
    progressColor: "#FF4C60",
  },
  {
    id: 4,
    title: "SEO",
    percantage: 67,
    progressColor: "#6C6CE5",
  },
  {
    id: 5,
    title: "Illustration",
    percantage: 53,
    progressColor: "#6C6CE5",
  },
];

const counterData = [
  
  {
    id: 1,
    title: "Years of Experience",
    count: 7,
    icon: "icon-screen-desktop",
  },
  {
    id: 2,
    title: "Projects completed",
    count: 243,
    icon: "icon-check",
  },
  {
    id: 3,
    title: "Websites I\'ve worked on",
    count: 56,
    icon: "icon-badge",
  },
];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img src={aboutContent.avatarImage} alt={aboutContent.name} />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-6">
                  <p>{aboutContent.content}</p>
                  <div className="mt-3">
                    <a href="!#" className="btn btn-default">
                      Download CV
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-6">
                  {progressData.map((progress) => (
                    <TrackVisibility
                      once
                      key={progress.id}
                      className="progress-wrapper"
                    >
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
        <div className="row fix-spacing justify-content-center">
          {counterData.map((counter) => (
            <div key={counter.id} className="col-md-3 col-sm-6">
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
