import React from "react";
import { Link } from "react-scroll";
import Pagetitle from "../elements/Pagetitle";
import Service from "../elements/Service";

const servicesData = [
  {
    id: 1,
    icon: "images/grid.svg",
    title: "UI/UX design",
    content:
      "I have a deep understanding of grid, focal point, and creating functional layouts that guide the user where to go.",
    color: "rgb(13, 125, 93)",
    contentColor: "light",
    bgColor: "green",
  },
  {
    id: 2,
    icon: "images/service-2.svg",
    title: "Web Development",
    content:
      "Skilled in HTML, CSS, SASS, PHP, JS. Vastly experienced with Wordpress. Working knowledge of React and Vue JS libraries.",
    color: "rgb(21, 113, 180)",
    contentColor: "dark",
    bgColor: "blue",
  },
  {
    id: 3,
    icon: "images/service-1.svg",
    title: "Illustration",
    content:
      "I can bring ideas/concepts to life with cartoons and other illustrations. I enjoy creating messages with my art.",
    color: "rgb(240, 100, 17)",
    contentColor: "light",
    bgColor: "orange",
  },
];

function Services() {
  return (
    <section id="services">
      <div className="container">
        <Pagetitle title="Services" />
        <div className="row fix-spacing">
          {servicesData.map((service) => (
            <div className="col-md-4" key={service.id}>
              <Service service={service} />
            </div>
          ))}
        </div>
        {/* <div className="mt-5 text-center">
          <p className="mb-0">
            Looking for a custom job?{" "}
            <Link
              className="colorpink pointer"
              to="section-contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Click here
            </Link>{" "}
            to contact me! 👋
          </p>
        </div> */}
      </div>
    </section>
  );
}

export default Services;
