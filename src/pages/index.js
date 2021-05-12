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
            src={require("../images/logo-sketch.png").default}
            width="50"
            alt=""
          />
          <img
            src={require("../images/logo-figma.png").default}
            width="50"
            alt=""
          />
          <img
            src={require("../images/logo-studio.png").default}
            width="50"
            alt=""
          />
          <img
            src={require("../images/logo-framer.png").default}
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
      <h2>Projects</h2>
      <div className="CardGroup">
        <Card
          title="Music Streamer"
          text="Angular"
          image={require("../images/wallpaper.jpg").default}
        />
        <Card
          title="Cleaning Scheduler"
          text="Vue"
          image={require("../images/wallpaper.jpg").default}
        />
        <Card
          title="ECommerce"
          text="React"
          image={require("../images/wallpaper.jpg").default}
        />
        <Card
          title="Space Invader"
          text="Python"
          image={require("../images/wallpaper.jpg").default}
        />
        <Card
          title="Chat App"
          text="Java"
          image={require("../images/wallpaper.jpg").default}
        />
        <Card
          title="Parking Simulation"
          text="C++"
          image={require("../images/wallpaper.jpg").default}
        />
      </div>
    </div>
    <Section />
    <div className="Cards">
      <h2>Articles</h2>
      <div className="CardGroup">
        <Card
          title="Music Streamer"
          text="Angular"
          image={require("../images/wallpaper.jpg").default}
        />
        <Card
          title="Cleaning Scheduler"
          text="Vue"
          image={require("../images/wallpaper.jpg").default}
        />
        <Card
          title="ECommerce"
          text="React"
          image={require("../images/wallpaper.jpg").default}
        />
      </div>
    </div>
    <Section
      title="About Me"
      text="I'm a Computer Programming and Analysis student at Seneca College. I love problem solving. I started my career in Customer Service, taught myself SQL and worked as a Information Systems Analyst. Currently looking for Co-Op positions in Software Development."
    />
    <Footer>
      <a href="mailto:support@designcode.io">Email</a> to ask anything. © 2018
    </Footer>
  </div>
)

export default IndexPage
