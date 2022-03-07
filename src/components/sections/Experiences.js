import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Bachelor’s Degree",
    years: "2009 - 2013",
    content:
      "Graphic Design, Art Institue of California Hollywood.",
  },
  {
    id: 2,
    title: "Javascript Development Course",
    years: "2017",
    content:
      "General Assembly of Santa Monica.",
  },
  {
    id: 3,
    title: "Chatsworth High School",
    years: "2006 - 2009",
    content:
      "A proud Chancellor, class of 09. ",
  },
];

const experienceData = [
    {
    id: 3,
    title: "Frontend Developer",
    years: "2019 - Present",
    content:
      "VS Media, owners of Flirt4Free",
  },
  {
    id: 1,
    title: "Web Developer",
    years: "2015 - 2019",
    content:
      "Goldco Precious Metals",
  },
  {
    id: 2,
    title: "Graphic Designer/Junior Web Developer",
    years: "2013 - 2015",
    content:
      "Golden Hippo Media, owners of Whole Body Research",
  },
  
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience & Education" />
        <div className="row">
          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
