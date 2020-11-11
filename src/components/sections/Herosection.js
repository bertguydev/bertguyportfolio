import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

function Herosection(props) {
  const { x, y } = props.position;
  const { height, width } = props.elementDimensions;
  const activeParallax = (depth = 15) => {
    let posX = (width / 2 - x) / depth;
    let posY = (height / 2 - y) / depth;
    return {
      transform: `translate(${posX}px, ${posY}px)`,
    };
  };

  return (
    <section
      id="home"
      className={
        props.light
          ? "home d-flex align-items-center light"
          : "home d-flex align-items-center"
      }
    >
      <div className="container">
        <div className="intro">
          <div className="profile-img"></div>

          <h1 className="mb-2 mt-0">Bert Caivano</h1>
          <p>
            I'm a{" "}
            <Typed
              strings={[
                "UI/UX Designer ",
                "Front-End Developer",
                "Wordpress Expert",
                "Illustration Artist"
              ]}
              typeSpeed={100}
              backSpeed={80}
              attr="value"
              loop
            >
              <label value></label>
            </Typed>
          </p>

          {/* <ul className="social-icons light list-inline mb-0 mt-4">
            <li className="list-inline-item">
              <a href="!#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="!#">
                <i className="fab fa-behance"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="!#">
                <i className="fab fa-dribbble"></i>
              </a>
            </li>
          </ul> */}

          {/* <div className="mt-4">
            <Link
              className="btn btn-default"
              to="section-contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Hire me
            </Link>
          </div> */}
        </div>

        <div className="scroll-down">
          <Link
            to="section-about"
            spy={true}
            smooth={true}
            duration={500}
            className="mouse-wrapper"
          >
            <span>Scroll Down</span>
            <span className="mouse">
              <span className="wheel"></span>
            </span>
          </Link>
        </div>

        <div className="parallax" data-relative-input="true">
          <svg
            width="35"
            height="35"
            className="layer p1"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(15)}
          >
            <path class="st-yellow" d="M9.85,0.87c0.23,0.03,0.46,0.05,0.69,0.08c1.16,0.15,2.29,0.42,3.33,0.97c1.23,0.66,2.18,1.63,2.9,2.83
                c0.76,1.25,1.2,2.61,1.33,4.06c0.06,0.7,0.11,1.41,0.12,2.11c0.02,2.07-0.46,4.04-1.34,5.9c-0.84,1.79-2.02,3.35-3.46,4.71
                c-2.04,1.93-4.38,3.43-6.9,4.64c-1.65,0.79-3.35,1.44-5.09,2c-0.15,0.05-0.3,0.12-0.46,0.13c-0.14,0.01-0.3-0.01-0.44-0.06
                c-0.21-0.07-0.24-0.25-0.07-0.39c0.11-0.09,0.24-0.17,0.37-0.23c0.89-0.4,1.78-0.78,2.66-1.19c2.33-1.06,4.44-2.44,6.25-4.26
                c1.49-1.48,2.67-3.18,3.45-5.14c0.41-1.05,0.68-2.14,0.81-3.25c0.14-1.18,0.19-2.35,0.12-3.53c-0.09-1.54-0.3-3.06-0.8-4.53
                c-0.33-0.98-0.85-1.84-1.62-2.54C11,2.56,10.19,2.2,9.26,2.12c-1.7-0.15-3.22,0.29-4.58,1.32C4.01,3.96,3.52,4.6,3.28,5.43
                C3.19,5.74,3.15,6.06,3.16,6.38c0,0.03,0.01,0.06,0.01,0.12c0.08-0.06,0.15-0.11,0.21-0.16c0.48-0.41,1.03-0.69,1.63-0.85
                c1.53-0.41,3.26,0.59,3.63,2.12c0.2,0.84,0.24,1.67,0.02,2.51c-0.31,1.16-1.04,1.93-2.21,2.25c-1.14,0.32-2.23,0.21-3.24-0.43
                c-0.53-0.34-0.87-0.83-1.14-1.39C1.57,9.47,1.39,8.34,1.52,7.16C1.7,5.54,2.35,4.15,3.53,3.02c1.06-1,2.31-1.65,3.74-1.94
                c0.43-0.09,0.86-0.12,1.3-0.18c0.03,0,0.06-0.01,0.1-0.02H9.85z"/>
            <path class="st-yellow" d="M20.54,5.21c-0.01-1,0.74-1.78,1.73-1.79c1.05-0.02,1.82,0.73,1.83,1.77c0.02,1-0.75,1.79-1.76,1.8
                C21.33,7,20.55,6.24,20.54,5.21"/>
            <path class="st-yellow" d="M22.32,15.02c-1.04-0.01-1.79-0.78-1.78-1.81c0.01-1,0.8-1.77,1.79-1.76c1,0.02,1.79,0.83,1.78,1.84
                C24.09,14.27,23.3,15.03,22.32,15.02"/>
          </svg>

          <svg
            width="35"
            height="35"
            className="layer p2"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(20)}
          >
            <path class="st0" d="M9.85,0.87c0.23,0.03,0.46,0.05,0.69,0.08c1.16,0.15,2.29,0.42,3.33,0.97c1.23,0.66,2.18,1.63,2.9,2.83
                c0.76,1.25,1.2,2.61,1.33,4.06c0.06,0.7,0.11,1.41,0.12,2.11c0.02,2.07-0.46,4.04-1.34,5.9c-0.84,1.79-2.02,3.35-3.46,4.71
                c-2.04,1.93-4.38,3.43-6.9,4.64c-1.65,0.79-3.35,1.44-5.09,2c-0.15,0.05-0.3,0.12-0.46,0.13c-0.14,0.01-0.3-0.01-0.44-0.06
                c-0.21-0.07-0.24-0.25-0.07-0.39c0.11-0.09,0.24-0.17,0.37-0.23c0.89-0.4,1.78-0.78,2.66-1.19c2.33-1.06,4.44-2.44,6.25-4.26
                c1.49-1.48,2.67-3.18,3.45-5.14c0.41-1.05,0.68-2.14,0.81-3.25c0.14-1.18,0.19-2.35,0.12-3.53c-0.09-1.54-0.3-3.06-0.8-4.53
                c-0.33-0.98-0.85-1.84-1.62-2.54C11,2.56,10.19,2.2,9.26,2.12c-1.7-0.15-3.22,0.29-4.58,1.32C4.01,3.96,3.52,4.6,3.28,5.43
                C3.19,5.74,3.15,6.06,3.16,6.38c0,0.03,0.01,0.06,0.01,0.12c0.08-0.06,0.15-0.11,0.21-0.16c0.48-0.41,1.03-0.69,1.63-0.85
                c1.53-0.41,3.26,0.59,3.63,2.12c0.2,0.84,0.24,1.67,0.02,2.51c-0.31,1.16-1.04,1.93-2.21,2.25c-1.14,0.32-2.23,0.21-3.24-0.43
                c-0.53-0.34-0.87-0.83-1.14-1.39C1.57,9.47,1.39,8.34,1.52,7.16C1.7,5.54,2.35,4.15,3.53,3.02c1.06-1,2.31-1.65,3.74-1.94
                c0.43-0.09,0.86-0.12,1.3-0.18c0.03,0,0.06-0.01,0.1-0.02H9.85z"/>
            <path class="st0" d="M20.54,5.21c-0.01-1,0.74-1.78,1.73-1.79c1.05-0.02,1.82,0.73,1.83,1.77c0.02,1-0.75,1.79-1.76,1.8
                C21.33,7,20.55,6.24,20.54,5.21"/>
            <path class="st0" d="M22.32,15.02c-1.04-0.01-1.79-0.78-1.78-1.81c0.01-1,0.8-1.77,1.79-1.76c1,0.02,1.79,0.83,1.78,1.84
                C24.09,14.27,23.3,15.03,22.32,15.02"/>
          </svg> 

          <svg
            width="35"
            height="35"
            className="layer p3"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(25)}
          >
            <path class="st-blue" d="M9.85,0.87c0.23,0.03,0.46,0.05,0.69,0.08c1.16,0.15,2.29,0.42,3.33,0.97c1.23,0.66,2.18,1.63,2.9,2.83
                c0.76,1.25,1.2,2.61,1.33,4.06c0.06,0.7,0.11,1.41,0.12,2.11c0.02,2.07-0.46,4.04-1.34,5.9c-0.84,1.79-2.02,3.35-3.46,4.71
                c-2.04,1.93-4.38,3.43-6.9,4.64c-1.65,0.79-3.35,1.44-5.09,2c-0.15,0.05-0.3,0.12-0.46,0.13c-0.14,0.01-0.3-0.01-0.44-0.06
                c-0.21-0.07-0.24-0.25-0.07-0.39c0.11-0.09,0.24-0.17,0.37-0.23c0.89-0.4,1.78-0.78,2.66-1.19c2.33-1.06,4.44-2.44,6.25-4.26
                c1.49-1.48,2.67-3.18,3.45-5.14c0.41-1.05,0.68-2.14,0.81-3.25c0.14-1.18,0.19-2.35,0.12-3.53c-0.09-1.54-0.3-3.06-0.8-4.53
                c-0.33-0.98-0.85-1.84-1.62-2.54C11,2.56,10.19,2.2,9.26,2.12c-1.7-0.15-3.22,0.29-4.58,1.32C4.01,3.96,3.52,4.6,3.28,5.43
                C3.19,5.74,3.15,6.06,3.16,6.38c0,0.03,0.01,0.06,0.01,0.12c0.08-0.06,0.15-0.11,0.21-0.16c0.48-0.41,1.03-0.69,1.63-0.85
                c1.53-0.41,3.26,0.59,3.63,2.12c0.2,0.84,0.24,1.67,0.02,2.51c-0.31,1.16-1.04,1.93-2.21,2.25c-1.14,0.32-2.23,0.21-3.24-0.43
                c-0.53-0.34-0.87-0.83-1.14-1.39C1.57,9.47,1.39,8.34,1.52,7.16C1.7,5.54,2.35,4.15,3.53,3.02c1.06-1,2.31-1.65,3.74-1.94
                c0.43-0.09,0.86-0.12,1.3-0.18c0.03,0,0.06-0.01,0.1-0.02H9.85z"/>
            <path class="st-blue" d="M20.54,5.21c-0.01-1,0.74-1.78,1.73-1.79c1.05-0.02,1.82,0.73,1.83,1.77c0.02,1-0.75,1.79-1.76,1.8
                C21.33,7,20.55,6.24,20.54,5.21"/>
            <path class="st-blue" d="M22.32,15.02c-1.04-0.01-1.79-0.78-1.78-1.81c0.01-1,0.8-1.77,1.79-1.76c1,0.02,1.79,0.83,1.78,1.84
                C24.09,14.27,23.3,15.03,22.32,15.02"/>
          </svg>

          <svg
            width="35"
            height="35"
            className="layer p4"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(10)}
          >
            <path class="st0" d="M9.85,0.87c0.23,0.03,0.46,0.05,0.69,0.08c1.16,0.15,2.29,0.42,3.33,0.97c1.23,0.66,2.18,1.63,2.9,2.83
                c0.76,1.25,1.2,2.61,1.33,4.06c0.06,0.7,0.11,1.41,0.12,2.11c0.02,2.07-0.46,4.04-1.34,5.9c-0.84,1.79-2.02,3.35-3.46,4.71
                c-2.04,1.93-4.38,3.43-6.9,4.64c-1.65,0.79-3.35,1.44-5.09,2c-0.15,0.05-0.3,0.12-0.46,0.13c-0.14,0.01-0.3-0.01-0.44-0.06
                c-0.21-0.07-0.24-0.25-0.07-0.39c0.11-0.09,0.24-0.17,0.37-0.23c0.89-0.4,1.78-0.78,2.66-1.19c2.33-1.06,4.44-2.44,6.25-4.26
                c1.49-1.48,2.67-3.18,3.45-5.14c0.41-1.05,0.68-2.14,0.81-3.25c0.14-1.18,0.19-2.35,0.12-3.53c-0.09-1.54-0.3-3.06-0.8-4.53
                c-0.33-0.98-0.85-1.84-1.62-2.54C11,2.56,10.19,2.2,9.26,2.12c-1.7-0.15-3.22,0.29-4.58,1.32C4.01,3.96,3.52,4.6,3.28,5.43
                C3.19,5.74,3.15,6.06,3.16,6.38c0,0.03,0.01,0.06,0.01,0.12c0.08-0.06,0.15-0.11,0.21-0.16c0.48-0.41,1.03-0.69,1.63-0.85
                c1.53-0.41,3.26,0.59,3.63,2.12c0.2,0.84,0.24,1.67,0.02,2.51c-0.31,1.16-1.04,1.93-2.21,2.25c-1.14,0.32-2.23,0.21-3.24-0.43
                c-0.53-0.34-0.87-0.83-1.14-1.39C1.57,9.47,1.39,8.34,1.52,7.16C1.7,5.54,2.35,4.15,3.53,3.02c1.06-1,2.31-1.65,3.74-1.94
                c0.43-0.09,0.86-0.12,1.3-0.18c0.03,0,0.06-0.01,0.1-0.02H9.85z"/>
            <path class="st0" d="M20.54,5.21c-0.01-1,0.74-1.78,1.73-1.79c1.05-0.02,1.82,0.73,1.83,1.77c0.02,1-0.75,1.79-1.76,1.8
                C21.33,7,20.55,6.24,20.54,5.21"/>
            <path class="st0" d="M22.32,15.02c-1.04-0.01-1.79-0.78-1.78-1.81c0.01-1,0.8-1.77,1.79-1.76c1,0.02,1.79,0.83,1.78,1.84
                C24.09,14.27,23.3,15.03,22.32,15.02"/>
          </svg>

          {/* <svg
            width="35"
            height="35"
            className="layer p5"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(8)}
          >
            <path class="st0" d="M9.85,0.87c0.23,0.03,0.46,0.05,0.69,0.08c1.16,0.15,2.29,0.42,3.33,0.97c1.23,0.66,2.18,1.63,2.9,2.83
                c0.76,1.25,1.2,2.61,1.33,4.06c0.06,0.7,0.11,1.41,0.12,2.11c0.02,2.07-0.46,4.04-1.34,5.9c-0.84,1.79-2.02,3.35-3.46,4.71
                c-2.04,1.93-4.38,3.43-6.9,4.64c-1.65,0.79-3.35,1.44-5.09,2c-0.15,0.05-0.3,0.12-0.46,0.13c-0.14,0.01-0.3-0.01-0.44-0.06
                c-0.21-0.07-0.24-0.25-0.07-0.39c0.11-0.09,0.24-0.17,0.37-0.23c0.89-0.4,1.78-0.78,2.66-1.19c2.33-1.06,4.44-2.44,6.25-4.26
                c1.49-1.48,2.67-3.18,3.45-5.14c0.41-1.05,0.68-2.14,0.81-3.25c0.14-1.18,0.19-2.35,0.12-3.53c-0.09-1.54-0.3-3.06-0.8-4.53
                c-0.33-0.98-0.85-1.84-1.62-2.54C11,2.56,10.19,2.2,9.26,2.12c-1.7-0.15-3.22,0.29-4.58,1.32C4.01,3.96,3.52,4.6,3.28,5.43
                C3.19,5.74,3.15,6.06,3.16,6.38c0,0.03,0.01,0.06,0.01,0.12c0.08-0.06,0.15-0.11,0.21-0.16c0.48-0.41,1.03-0.69,1.63-0.85
                c1.53-0.41,3.26,0.59,3.63,2.12c0.2,0.84,0.24,1.67,0.02,2.51c-0.31,1.16-1.04,1.93-2.21,2.25c-1.14,0.32-2.23,0.21-3.24-0.43
                c-0.53-0.34-0.87-0.83-1.14-1.39C1.57,9.47,1.39,8.34,1.52,7.16C1.7,5.54,2.35,4.15,3.53,3.02c1.06-1,2.31-1.65,3.74-1.94
                c0.43-0.09,0.86-0.12,1.3-0.18c0.03,0,0.06-0.01,0.1-0.02H9.85z"/>
            <path class="st0" d="M20.54,5.21c-0.01-1,0.74-1.78,1.73-1.79c1.05-0.02,1.82,0.73,1.83,1.77c0.02,1-0.75,1.79-1.76,1.8
                C21.33,7,20.55,6.24,20.54,5.21"/>
            <path class="st0" d="M22.32,15.02c-1.04-0.01-1.79-0.78-1.78-1.81c0.01-1,0.8-1.77,1.79-1.76c1,0.02,1.79,0.83,1.78,1.84
                C24.09,14.27,23.3,15.03,22.32,15.02"/>
          </svg> */}

          <svg
            width="49"
            height="49"
            className="layer p6"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(18)}
          >
            <path class="st-yellow" d="M9.85,0.87c0.23,0.03,0.46,0.05,0.69,0.08c1.16,0.15,2.29,0.42,3.33,0.97c1.23,0.66,2.18,1.63,2.9,2.83
                c0.76,1.25,1.2,2.61,1.33,4.06c0.06,0.7,0.11,1.41,0.12,2.11c0.02,2.07-0.46,4.04-1.34,5.9c-0.84,1.79-2.02,3.35-3.46,4.71
                c-2.04,1.93-4.38,3.43-6.9,4.64c-1.65,0.79-3.35,1.44-5.09,2c-0.15,0.05-0.3,0.12-0.46,0.13c-0.14,0.01-0.3-0.01-0.44-0.06
                c-0.21-0.07-0.24-0.25-0.07-0.39c0.11-0.09,0.24-0.17,0.37-0.23c0.89-0.4,1.78-0.78,2.66-1.19c2.33-1.06,4.44-2.44,6.25-4.26
                c1.49-1.48,2.67-3.18,3.45-5.14c0.41-1.05,0.68-2.14,0.81-3.25c0.14-1.18,0.19-2.35,0.12-3.53c-0.09-1.54-0.3-3.06-0.8-4.53
                c-0.33-0.98-0.85-1.84-1.62-2.54C11,2.56,10.19,2.2,9.26,2.12c-1.7-0.15-3.22,0.29-4.58,1.32C4.01,3.96,3.52,4.6,3.28,5.43
                C3.19,5.74,3.15,6.06,3.16,6.38c0,0.03,0.01,0.06,0.01,0.12c0.08-0.06,0.15-0.11,0.21-0.16c0.48-0.41,1.03-0.69,1.63-0.85
                c1.53-0.41,3.26,0.59,3.63,2.12c0.2,0.84,0.24,1.67,0.02,2.51c-0.31,1.16-1.04,1.93-2.21,2.25c-1.14,0.32-2.23,0.21-3.24-0.43
                c-0.53-0.34-0.87-0.83-1.14-1.39C1.57,9.47,1.39,8.34,1.52,7.16C1.7,5.54,2.35,4.15,3.53,3.02c1.06-1,2.31-1.65,3.74-1.94
                c0.43-0.09,0.86-0.12,1.3-0.18c0.03,0,0.06-0.01,0.1-0.02H9.85z"/>
            <path class="st-yellow" d="M20.54,5.21c-0.01-1,0.74-1.78,1.73-1.79c1.05-0.02,1.82,0.73,1.83,1.77c0.02,1-0.75,1.79-1.76,1.8
                C21.33,7,20.55,6.24,20.54,5.21"/>
            <path class="st-yellow" d="M22.32,15.02c-1.04-0.01-1.79-0.78-1.78-1.81c0.01-1,0.8-1.77,1.79-1.76c1,0.02,1.79,0.83,1.78,1.84
                C24.09,14.27,23.3,15.03,22.32,15.02"/>
          </svg>

          <svg
            width="26"
            height="26"
            className="layer p7"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(22)}
          >
            <path class="st-blue" d="M9.85,0.87c0.23,0.03,0.46,0.05,0.69,0.08c1.16,0.15,2.29,0.42,3.33,0.97c1.23,0.66,2.18,1.63,2.9,2.83
                c0.76,1.25,1.2,2.61,1.33,4.06c0.06,0.7,0.11,1.41,0.12,2.11c0.02,2.07-0.46,4.04-1.34,5.9c-0.84,1.79-2.02,3.35-3.46,4.71
                c-2.04,1.93-4.38,3.43-6.9,4.64c-1.65,0.79-3.35,1.44-5.09,2c-0.15,0.05-0.3,0.12-0.46,0.13c-0.14,0.01-0.3-0.01-0.44-0.06
                c-0.21-0.07-0.24-0.25-0.07-0.39c0.11-0.09,0.24-0.17,0.37-0.23c0.89-0.4,1.78-0.78,2.66-1.19c2.33-1.06,4.44-2.44,6.25-4.26
                c1.49-1.48,2.67-3.18,3.45-5.14c0.41-1.05,0.68-2.14,0.81-3.25c0.14-1.18,0.19-2.35,0.12-3.53c-0.09-1.54-0.3-3.06-0.8-4.53
                c-0.33-0.98-0.85-1.84-1.62-2.54C11,2.56,10.19,2.2,9.26,2.12c-1.7-0.15-3.22,0.29-4.58,1.32C4.01,3.96,3.52,4.6,3.28,5.43
                C3.19,5.74,3.15,6.06,3.16,6.38c0,0.03,0.01,0.06,0.01,0.12c0.08-0.06,0.15-0.11,0.21-0.16c0.48-0.41,1.03-0.69,1.63-0.85
                c1.53-0.41,3.26,0.59,3.63,2.12c0.2,0.84,0.24,1.67,0.02,2.51c-0.31,1.16-1.04,1.93-2.21,2.25c-1.14,0.32-2.23,0.21-3.24-0.43
                c-0.53-0.34-0.87-0.83-1.14-1.39C1.57,9.47,1.39,8.34,1.52,7.16C1.7,5.54,2.35,4.15,3.53,3.02c1.06-1,2.31-1.65,3.74-1.94
                c0.43-0.09,0.86-0.12,1.3-0.18c0.03,0,0.06-0.01,0.1-0.02H9.85z"/>
            <path class="st-blue" d="M20.54,5.21c-0.01-1,0.74-1.78,1.73-1.79c1.05-0.02,1.82,0.73,1.83,1.77c0.02,1-0.75,1.79-1.76,1.8
                C21.33,7,20.55,6.24,20.54,5.21"/>
            <path class="st-blue" d="M22.32,15.02c-1.04-0.01-1.79-0.78-1.78-1.81c0.01-1,0.8-1.77,1.79-1.76c1,0.02,1.79,0.83,1.78,1.84
                C24.09,14.27,23.3,15.03,22.32,15.02"/>
          </svg>

          <svg
            width="35"
            height="35"
            className="layer p8"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(15)}
          >
            <path class="st-yellow" d="M9.85,0.87c0.23,0.03,0.46,0.05,0.69,0.08c1.16,0.15,2.29,0.42,3.33,0.97c1.23,0.66,2.18,1.63,2.9,2.83
                c0.76,1.25,1.2,2.61,1.33,4.06c0.06,0.7,0.11,1.41,0.12,2.11c0.02,2.07-0.46,4.04-1.34,5.9c-0.84,1.79-2.02,3.35-3.46,4.71
                c-2.04,1.93-4.38,3.43-6.9,4.64c-1.65,0.79-3.35,1.44-5.09,2c-0.15,0.05-0.3,0.12-0.46,0.13c-0.14,0.01-0.3-0.01-0.44-0.06
                c-0.21-0.07-0.24-0.25-0.07-0.39c0.11-0.09,0.24-0.17,0.37-0.23c0.89-0.4,1.78-0.78,2.66-1.19c2.33-1.06,4.44-2.44,6.25-4.26
                c1.49-1.48,2.67-3.18,3.45-5.14c0.41-1.05,0.68-2.14,0.81-3.25c0.14-1.18,0.19-2.35,0.12-3.53c-0.09-1.54-0.3-3.06-0.8-4.53
                c-0.33-0.98-0.85-1.84-1.62-2.54C11,2.56,10.19,2.2,9.26,2.12c-1.7-0.15-3.22,0.29-4.58,1.32C4.01,3.96,3.52,4.6,3.28,5.43
                C3.19,5.74,3.15,6.06,3.16,6.38c0,0.03,0.01,0.06,0.01,0.12c0.08-0.06,0.15-0.11,0.21-0.16c0.48-0.41,1.03-0.69,1.63-0.85
                c1.53-0.41,3.26,0.59,3.63,2.12c0.2,0.84,0.24,1.67,0.02,2.51c-0.31,1.16-1.04,1.93-2.21,2.25c-1.14,0.32-2.23,0.21-3.24-0.43
                c-0.53-0.34-0.87-0.83-1.14-1.39C1.57,9.47,1.39,8.34,1.52,7.16C1.7,5.54,2.35,4.15,3.53,3.02c1.06-1,2.31-1.65,3.74-1.94
                c0.43-0.09,0.86-0.12,1.3-0.18c0.03,0,0.06-0.01,0.1-0.02H9.85z"/>
            <path class="st-yellow" d="M20.54,5.21c-0.01-1,0.74-1.78,1.73-1.79c1.05-0.02,1.82,0.73,1.83,1.77c0.02,1-0.75,1.79-1.76,1.8
                C21.33,7,20.55,6.24,20.54,5.21"/>
            <path class="st-yellow" d="M22.32,15.02c-1.04-0.01-1.79-0.78-1.78-1.81c0.01-1,0.8-1.77,1.79-1.76c1,0.02,1.79,0.83,1.78,1.84
                C24.09,14.27,23.3,15.03,22.32,15.02"/>
          </svg>

          <svg
            width="35"
            height="35"
            className="layer p9"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(10)}
          >
            <path class="st-yellow" d="M9.85,0.87c0.23,0.03,0.46,0.05,0.69,0.08c1.16,0.15,2.29,0.42,3.33,0.97c1.23,0.66,2.18,1.63,2.9,2.83
                c0.76,1.25,1.2,2.61,1.33,4.06c0.06,0.7,0.11,1.41,0.12,2.11c0.02,2.07-0.46,4.04-1.34,5.9c-0.84,1.79-2.02,3.35-3.46,4.71
                c-2.04,1.93-4.38,3.43-6.9,4.64c-1.65,0.79-3.35,1.44-5.09,2c-0.15,0.05-0.3,0.12-0.46,0.13c-0.14,0.01-0.3-0.01-0.44-0.06
                c-0.21-0.07-0.24-0.25-0.07-0.39c0.11-0.09,0.24-0.17,0.37-0.23c0.89-0.4,1.78-0.78,2.66-1.19c2.33-1.06,4.44-2.44,6.25-4.26
                c1.49-1.48,2.67-3.18,3.45-5.14c0.41-1.05,0.68-2.14,0.81-3.25c0.14-1.18,0.19-2.35,0.12-3.53c-0.09-1.54-0.3-3.06-0.8-4.53
                c-0.33-0.98-0.85-1.84-1.62-2.54C11,2.56,10.19,2.2,9.26,2.12c-1.7-0.15-3.22,0.29-4.58,1.32C4.01,3.96,3.52,4.6,3.28,5.43
                C3.19,5.74,3.15,6.06,3.16,6.38c0,0.03,0.01,0.06,0.01,0.12c0.08-0.06,0.15-0.11,0.21-0.16c0.48-0.41,1.03-0.69,1.63-0.85
                c1.53-0.41,3.26,0.59,3.63,2.12c0.2,0.84,0.24,1.67,0.02,2.51c-0.31,1.16-1.04,1.93-2.21,2.25c-1.14,0.32-2.23,0.21-3.24-0.43
                c-0.53-0.34-0.87-0.83-1.14-1.39C1.57,9.47,1.39,8.34,1.52,7.16C1.7,5.54,2.35,4.15,3.53,3.02c1.06-1,2.31-1.65,3.74-1.94
                c0.43-0.09,0.86-0.12,1.3-0.18c0.03,0,0.06-0.01,0.1-0.02H9.85z"/>
            <path class="st-yellow" d="M20.54,5.21c-0.01-1,0.74-1.78,1.73-1.79c1.05-0.02,1.82,0.73,1.83,1.77c0.02,1-0.75,1.79-1.76,1.8
                C21.33,7,20.55,6.24,20.54,5.21"/>
            <path class="st-yellow" d="M22.32,15.02c-1.04-0.01-1.79-0.78-1.78-1.81c0.01-1,0.8-1.77,1.79-1.76c1,0.02,1.79,0.83,1.78,1.84
                C24.09,14.27,23.3,15.03,22.32,15.02"/>
          </svg>

          <svg
            width="35"
            height="35"
            className="layer p10"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(23)}
          >
            <path class="st0" d="M9.85,0.87c0.23,0.03,0.46,0.05,0.69,0.08c1.16,0.15,2.29,0.42,3.33,0.97c1.23,0.66,2.18,1.63,2.9,2.83
                c0.76,1.25,1.2,2.61,1.33,4.06c0.06,0.7,0.11,1.41,0.12,2.11c0.02,2.07-0.46,4.04-1.34,5.9c-0.84,1.79-2.02,3.35-3.46,4.71
                c-2.04,1.93-4.38,3.43-6.9,4.64c-1.65,0.79-3.35,1.44-5.09,2c-0.15,0.05-0.3,0.12-0.46,0.13c-0.14,0.01-0.3-0.01-0.44-0.06
                c-0.21-0.07-0.24-0.25-0.07-0.39c0.11-0.09,0.24-0.17,0.37-0.23c0.89-0.4,1.78-0.78,2.66-1.19c2.33-1.06,4.44-2.44,6.25-4.26
                c1.49-1.48,2.67-3.18,3.45-5.14c0.41-1.05,0.68-2.14,0.81-3.25c0.14-1.18,0.19-2.35,0.12-3.53c-0.09-1.54-0.3-3.06-0.8-4.53
                c-0.33-0.98-0.85-1.84-1.62-2.54C11,2.56,10.19,2.2,9.26,2.12c-1.7-0.15-3.22,0.29-4.58,1.32C4.01,3.96,3.52,4.6,3.28,5.43
                C3.19,5.74,3.15,6.06,3.16,6.38c0,0.03,0.01,0.06,0.01,0.12c0.08-0.06,0.15-0.11,0.21-0.16c0.48-0.41,1.03-0.69,1.63-0.85
                c1.53-0.41,3.26,0.59,3.63,2.12c0.2,0.84,0.24,1.67,0.02,2.51c-0.31,1.16-1.04,1.93-2.21,2.25c-1.14,0.32-2.23,0.21-3.24-0.43
                c-0.53-0.34-0.87-0.83-1.14-1.39C1.57,9.47,1.39,8.34,1.52,7.16C1.7,5.54,2.35,4.15,3.53,3.02c1.06-1,2.31-1.65,3.74-1.94
                c0.43-0.09,0.86-0.12,1.3-0.18c0.03,0,0.06-0.01,0.1-0.02H9.85z"/>
            <path class="st0" d="M20.54,5.21c-0.01-1,0.74-1.78,1.73-1.79c1.05-0.02,1.82,0.73,1.83,1.77c0.02,1-0.75,1.79-1.76,1.8
                C21.33,7,20.55,6.24,20.54,5.21"/>
            <path class="st0" d="M22.32,15.02c-1.04-0.01-1.79-0.78-1.78-1.81c0.01-1,0.8-1.77,1.79-1.76c1,0.02,1.79,0.83,1.78,1.84
                C24.09,14.27,23.3,15.03,22.32,15.02"/>
          </svg>

          <svg
            width="35"
            height="35"
            className="layer p11"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(18)}
          >
            <path class="st0" d="M9.85,0.87c0.23,0.03,0.46,0.05,0.69,0.08c1.16,0.15,2.29,0.42,3.33,0.97c1.23,0.66,2.18,1.63,2.9,2.83
                c0.76,1.25,1.2,2.61,1.33,4.06c0.06,0.7,0.11,1.41,0.12,2.11c0.02,2.07-0.46,4.04-1.34,5.9c-0.84,1.79-2.02,3.35-3.46,4.71
                c-2.04,1.93-4.38,3.43-6.9,4.64c-1.65,0.79-3.35,1.44-5.09,2c-0.15,0.05-0.3,0.12-0.46,0.13c-0.14,0.01-0.3-0.01-0.44-0.06
                c-0.21-0.07-0.24-0.25-0.07-0.39c0.11-0.09,0.24-0.17,0.37-0.23c0.89-0.4,1.78-0.78,2.66-1.19c2.33-1.06,4.44-2.44,6.25-4.26
                c1.49-1.48,2.67-3.18,3.45-5.14c0.41-1.05,0.68-2.14,0.81-3.25c0.14-1.18,0.19-2.35,0.12-3.53c-0.09-1.54-0.3-3.06-0.8-4.53
                c-0.33-0.98-0.85-1.84-1.62-2.54C11,2.56,10.19,2.2,9.26,2.12c-1.7-0.15-3.22,0.29-4.58,1.32C4.01,3.96,3.52,4.6,3.28,5.43
                C3.19,5.74,3.15,6.06,3.16,6.38c0,0.03,0.01,0.06,0.01,0.12c0.08-0.06,0.15-0.11,0.21-0.16c0.48-0.41,1.03-0.69,1.63-0.85
                c1.53-0.41,3.26,0.59,3.63,2.12c0.2,0.84,0.24,1.67,0.02,2.51c-0.31,1.16-1.04,1.93-2.21,2.25c-1.14,0.32-2.23,0.21-3.24-0.43
                c-0.53-0.34-0.87-0.83-1.14-1.39C1.57,9.47,1.39,8.34,1.52,7.16C1.7,5.54,2.35,4.15,3.53,3.02c1.06-1,2.31-1.65,3.74-1.94
                c0.43-0.09,0.86-0.12,1.3-0.18c0.03,0,0.06-0.01,0.1-0.02H9.85z"/>
            <path class="st0" d="M20.54,5.21c-0.01-1,0.74-1.78,1.73-1.79c1.05-0.02,1.82,0.73,1.83,1.77c0.02,1-0.75,1.79-1.76,1.8
                C21.33,7,20.55,6.24,20.54,5.21"/>
            <path class="st0" d="M22.32,15.02c-1.04-0.01-1.79-0.78-1.78-1.81c0.01-1,0.8-1.77,1.79-1.76c1,0.02,1.79,0.83,1.78,1.84
                C24.09,14.27,23.3,15.03,22.32,15.02"/>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
