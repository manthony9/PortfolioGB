import React from "react"
import Link from "gatsby-link"
import Card from "../components/card"
import Section from "../components/section"
import Wave from "../components/wave"
import Footer from "../components/footer"
import Header from "../components/header"

const IndexPage = () => (
  <div>
    <Header />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
          Hi, my name is<span> Morris</span>
        </h1>
        <p>Welcome to my Portfolio.</p>

        <div className="Logos">
          <img
            src={require("../images/logo-c++.svg").default}
            width="50"
            alt=""
          />
          <img
            src={require("../images/logo-figma.png").default}
            width="50"
            alt=""
          />
          <img
            src={require("../images/logo-angular.svg").default}
            width="50"
            alt=""
          />
          <img
            src={require("../images/logo-python.svg").default}
            width="50"
            alt=""
          />
          <img
            src={require("../images/logo-react.png").default}
            width="50"
            alt=""
          />
          <img
            src={require("../images/logo-swift.png").default}
            width="50"
            alt=""
          />
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2 id="projects">Projects</h2>
      <div className="CardGroup">
        <a href="https://ang-spoti.vercel.app">
          <Card
            title="Music Streamer"
            text="Angular"
            image={require("../images/wallpaper.jpg").default}
          />
        </a>
        <a href="https://crwn-morris.herokuapp.com">
          <Card
            title="React E-Store"
            text="React"
            image={require("../images/wallpaper.jpg").default}
          />
        </a>
        <a href="https://github.com/manthony9/Java-Chat-App">
          <Card
            title="Java Chat App"
            text="Java"
            image={require("../images/wallpaper.jpg").default}
          />
        </a>
        <a href="https://github.com/manthony9/SpaceInvaderPygame">
          <Card
            title="Space Invader"
            text="Python"
            image={require("../images/wallpaper.jpg").default}
          />
        </a>
        <a href="https://github.com/manthony9/DigitalHealthHackathon">
          <Card
            title="Hackathon"
            text="MERN"
            image={require("../images/wallpaper.jpg").default}
          />
        </a>
        <a href="https://github.com/manthony9/ParkingApp">
          <Card
            title="Parking Simulation"
            text="C++"
            image={require("../images/wallpaper.jpg").default}
          />
        </a>
      </div>
    </div>

    <Section
      id="footer"
      title="About Me"
      text="I'm a student at Seneca College studying Programming. I love problem solving and learning new things. Using Gatsby for this project has been a nice experience. Do checkout the projects section for some of my other projects and feel free to reach out for collaborations or questions."
    />
    <Footer>
      <div className="Logos" id="footer">
        <a href="mailto:morris.anthony2992@gmail.com">
          {" "}
          <img
            src={require("../images/logo-gmail.png").default}
            width="50"
            alt=""
          />
        </a>
        <a href="http://ca.linkedin.com/in/morris-anthony-161263128">
          {" "}
          <img
            src={require("../images/logo-linkedin.png").default}
            width="50"
            alt=""
          />
        </a>
        <a href="https://github.com/manthony9">
          {" "}
          <img
            src={require("../images/logo-github.png").default}
            width="50"
            alt=""
          />
        </a>
      </div>
    </Footer>
  </div>
)

export default IndexPage
