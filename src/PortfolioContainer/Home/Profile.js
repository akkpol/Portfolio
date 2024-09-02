import React, { useState, useEffect } from "react";
import "./Profile.css";
import Moon from "../../Image/moon.png";
import Mountain_behind from "../../Image/Mountain_behind.png";
import Mountain_front from "../../Image/Mountain_front.png";
import Stars from "../../Image/stars.png";
import Im from "../../Image/Im.png";
import myImage from "../../Image/myImage.png";
import TypeWriterEffect from "react-typewriter-effect";
import Resume from "../Resume/Resume";
import {
  SiNodedotjs,
  SiReact,
  SiMysql,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobexd,
  SiFigma,
  SiGit,
  SiCss3,
  SiHtml5,
  SiJavascript,
} from "react-icons/si";
import Contact from "../Contact/Contact";

export default function Profile() {
  window.addEventListener("scroll", () => {
    let varlueScrol = window.scrollY;
    document.getElementById("stars").style.left = varlueScrol * 0.25 + "px";
    document.getElementById("moon").style.marginTop = varlueScrol * 1.2 + "px";
    document.getElementById("moon").style.left = varlueScrol * 0.5 + "px";
    document.getElementById("mountain_behind").style.top =
      varlueScrol * 0.5 + "px";
    document.getElementById("mountain_front").style.left =
      varlueScrol * 0 + "px";
  });
  const [showImgmenu, setShowImgmenu] = useState(false);
  function onHendleMenuImgEnter() {
    setShowImgmenu(true);
  }
  function onHendleMenuImgLeave() {
    setShowImgmenu(false);
  }
  const [cont, setCont] = useState(0);

  // let myVar = setInterval(setCont(cont + 1), 1000);
  console.log(cont);

  useEffect(() => {
    // const id = setInterval(() => {
    //   setCont((c) => c + 1);
    // }, 1000);
    // return () => clearInterval(id);
  }, []);

  return (
    <div className="allProfile">
      <header>
        <a href="" className="logo">
          AKKAPOL
        </a>
        <ul>
          <li>
            <a href="#Home" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </header>
      <section>
        <img src={Stars} id="stars" />
        <img src={Moon} id="moon" />
        <img src={Mountain_behind} id="mountain_behind" />
        {/* <a href="#" id="btn">
          Explore
        </a> */}
        {/* <h2 id="text">Akkapol</h2> */}
        <img src={Mountain_front} id="mountain_front" />
        {/* <img src={Someone} id="someone" /> */}
        <div className="hiIm">
          {/* <h2>Hi I'm Akkapol</h2>
          <h3>Web developer React JS.</h3> */}
          <TypeWriterEffect
            id="Hello1"
            textStyle={{
              letterSpacing: "5px",
            }}
            startDelay={200}
            cursorColor="#fff"
            hideCursorAfterText="true"
            text="Hi I'm Akkapol"
            typeSpeed={100}
          />

          <TypeWriterEffect
            textStyle={{
              fontWeight: 600,
              letterSpacing: "3px",

              fontSize: "0.9em",
            }}
            startDelay={2500}
            cursorColor="#fff"
            hideCursorAfterText="true"
            multiText={[
              "Web developer React JS.",
              // "Graphic Designer.",
              // "I am interested in Web Animetion.",
            ]}
            loop={true}
            nextTextDelay={1000}
            typeSpeed={70}
          />
        </div>
        <div
          className="vectoCradit"
          onClick={() =>
            window.open(
              "https://www.freepik.com/free-vector/hiker-man-road-mountains-night-vector-cartoon-landscape-nature-park-with-canyon-stone-cliffs-rocks-moon-sky-tourist-with-backpack-hiking-path_13195801.htm#page=1&query=Mountains&position=23&from_view=author",
              "_blank"
            )
          }
        >
          Vector credit : @upklyak
        </div>
      </section>
      <div className="animatemenu" onMouseLeave={onHendleMenuImgLeave}>
        {showImgmenu ? (
          <ul className="LaniMenu">
            <li>
              <p className="menu" id="menuResume">
                My resume.
              </p>
            </li>

            <li>
              <p className="menu" id="menuContact">
                Contact me.
              </p>
            </li>
          </ul>
        ) : (
          <ul className="LaniMenu" style={{ visibility: "hidden" }}>
            <li>
              <p className="menu" id="menuResume">
                My resume
              </p>
            </li>

            <li>
              <p className="menu" id="menuContact">
                Contact me.
              </p>
            </li>
          </ul>
        )}

        <img src={Im} id="im" onMouseEnter={onHendleMenuImgEnter} />

        {showImgmenu ? (
          <ul className="RaniMenu">
            <li>
              <p
                className="menu"
                id="menuAbout"
                onClick={() => {
                  window.location.href = "#about";
                }}
              >
                About me.
              </p>
            </li>

            <li>
              <p className="menu" id="menuProject">
                My project
              </p>
            </li>
          </ul>
        ) : (
          <ul className="RaniMenu" style={{ visibility: "hidden" }}>
            <li>
              <p
                className="menu"
                id="menuAbout"
                onClick={() => {
                  window.location.href = "#about";
                }}
              >
                About me.
              </p>
            </li>

            <li>
              <p className="menu" id="menuProject">
                My project
              </p>
            </li>
          </ul>
        )}
      </div>

      {/* <a href=""></a> */}
      <div className="sec" id="about">
        <h2 className="headMain">About me</h2>
        <div className="aboutMesec">
          <p className="pAboutMe">
            I am constantly improving myself and never stop learning new things.
            and interested in learning more about web developer. I gain the most
            satisfaction at work when I am challenged, have the opportunity to
            learn and develop.
          </p>

          <div className="Bimage">
            <img src={myImage} className="Bimage myimage" />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div>
          <h3 className="Habout">My Skill</h3>
          <br />
          <br />
          <div className="mySkilllogo">
            {" "}
            <SiReact />
            <SiCss3 />
            <SiHtml5 />
            <SiJavascript />
            <SiNodedotjs />
            <SiFigma />
            <SiGit />
            <SiAdobeillustrator id="AiLogo" />
            <SiAdobephotoshop />
            <SiAdobexd />
            <SiMysql />
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
      <div className="sec" id="resume">
        <Resume id="resume" />
      </div>
      <div className="sec" id="contact">
        <Contact />
      </div>
    </div>
  );
}
