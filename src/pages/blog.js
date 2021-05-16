import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Head from "../components/header"
import Wave from "../components/wave"
import Section from "../components/section"
import Footer from "../components/footer"

export default function Header() {
  return (
    <StaticQuery
      query={graphql`
        query BlogQuery {
          site {
            siteMetadata {
              title
            }
          }
          allContentfulLink {
            edges {
              node {
                title
              }
            }
          }
        }
      `}
      render={data => (
        <div>
          {" "}
          <Head />
          <div className="Hero">
            <div className="HeroGroup">
              <h1>
                Welcome to my<span> Blog</span>
              </h1>

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
            </div>
          </div>
          <header>
            {data.allContentfulLink.edges.map(edge => (
              <h1>{edge.node.title}</h1>
            ))}
          </header>
          <Footer>
            <a href="mailto:support@designcode.io">Email</a> to ask anything. ©
            2018
          </Footer>
        </div>
      )}
    />
  )
}
