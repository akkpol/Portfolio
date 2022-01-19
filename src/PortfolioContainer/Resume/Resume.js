import React from "react";
import "../Home/Profile.css";

export default function Resume() {
  return (
    <div>
      <h2 className="headMain">Resume</h2>

      <div className="resume-container">
        <div className="resume-dtel">
          <h3 className="Habout ">WORK EXPERIENCE</h3>

          <div className="">
            <h1 className=" h-resume">Restaurant Manager</h1>
            <h3>Frozen restaurant</h3>
            <div className="headMain">01/2019 - 12/2020</div>
            <ul>
              <li>
                Purchased adequate quantities of food, beverages, equipment and
                supplies.
              </li>
              <li>
                Led and directed team members on effective methods, operations
                and procedures.
              </li>
              <li>
                Promoted positive atmosphere and went above and beyond to
                guarantee each customer received exceptional food and service.
              </li>
            </ul>
          </div>
          <div className="">
            <h1>Graphic Designer</h1>
            <h3>Koraenterprise.co.ltd</h3>
            <div className="headMain">10/2017 - 07/2018</div>
            <ul>
              <li>
                Developed display, marketing and packaging materials to support
                product branding strategies.
              </li>
              <li>Developed creative design for print materials, brochures.</li>
            </ul>
          </div>
          <div className="">
            <h1>Junior.NET Software Developer</h1>
            <h3>AuctionTrade.co.ltd</h3>
            <div className="headMain">10/2015 - 02/2017</div>
            <ul>
              <li>Developed, modified and debugged programs.</li>
              <li>
                Maintained existing applications and designed and delivered new
                applications.
              </li>
            </ul>
          </div>
        </div>
        <div className="resume-dtel">
          <h3 className="Habout ">EDUCATION</h3>

          <div className="">
            <h1 className=" h-resume">Fullstack JavaScript</h1>
            <h3>Software park Thailand Codecamp</h3>
            <div className="headMain">05/2019 - 11/2021</div>
            <ul>
              <li>Fullstack JavaScript, React, Node.JS, SQL, UX/UI</li>
            </ul>
          </div>
          <div className="">
            <h1>Computer science</h1>
            <h3>Chandrakasem Rajabhat University</h3>
            <div className="headMain">10/2010 - 07/2013</div>
          </div>
        </div>
      </div>
    </div>
  );
}
