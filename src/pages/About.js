import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css"

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      >
      </div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum commodi tempora at sit illo, sint quia recusandae dolorum dolore enim iste pariatur, deleniti, corrupti ut! Eligendi quod odit aspernatur et natus nisi animi rem? Natus ea necessitatibus odit et eaque quos dolores tenetur voluptatibus accusantium modi iste, incidunt distinctio voluptatum. Nisi quas hic, porro dolor in facilis unde saepe officiis veritatis beatae quisquam fugit ducimus velit! Placeat sint nostrum commodi, odit voluptas laborum quae nam pariatur accusamus optio alias repudiandae est labore consequatur obcaecati similique assumenda mollitia doloremque inventore quia ad fugiat reprehenderit. Quam illum sunt quos similique cumque in?</p>
      </div>
    </div>
  );
}

export default About;
