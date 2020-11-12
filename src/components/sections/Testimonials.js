import React from "react";
import Slider from "react-slick";
import Pagetitle from "../elements/Pagetitle";
import Testimonial from "../elements/Testimonial";

const sliderData = [
  {
    id: 1,
    avatar: "images/nicole.jpg",
    userName: "Nicole Mohammadi",
    subtitle: "Beaty Product Developer and Brand Manager",
    alttag: 'Nicole Testimonial',
    review:
      "Bert is one of the best graphic artists I've ever worked with. He can do it all! No matter what I've needed made, Bert always came through on tight deadlines. He's able to handle multiple projects without loosing focus or speed. He really knows how to take your vision and turn it into something better than you could have imagined. Bert was the Lead Graphic Designer and handled everything from email blasts, landing pages, labels/packaging, business cards, brochures, apparel, etc. He continued to educate himself and expand his skill set which allowed him to be such an asset at our company. He was always willing to help out the other teams and designers - and his sweet, generous, and HILARIOUS personality made him an absolute pleasure to work with. I highly recommend Bert for graphic design and can't wait to work with him again in the future!",
  },
  {
    id: 2,
    avatar: "images/thomas.jpg",
    userName: "Thomas Magazeno",
    subtitle: "Creative Director",
    alttag: 'Thomas Testimonial',
    review:
      "Bert Caivano has been an inspiring colleague to work with.  He is a strong strategic thinker who has done an excellent job to take on and deliver on a multitude of complex technical development solutions under tough deadlines.  He has been the backbone of Goldco's lead gen development and knows how to wear multiple hats with a strong understanding of the fundamentals of graphic design. Bert can design and develop a project from start to finish which is an asset to any company looking to add a dedicated and motivated colleague to their team.  Working with Bert on the marketing team has been a joy and I'd recommend him to anyone",
  },
];

function Testimonials() {
  const slidetSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="testimonials">
      <div className="container">
        <Pagetitle title="Peer Reviews" />
        <Slider {...slidetSettings} className="testimonials-wrapper">
          {sliderData.map((slider) => (
            <Testimonial key={slider.id} slider={slider} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;
