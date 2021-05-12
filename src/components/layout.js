import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
              keywords
            }
          }
        }
      `}
      render={data => (
        <>
          <div>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: "description",
                  content: data.site.siteMetadata.description,
                },
                { name: "keywords", content: data.site.siteMetadata.keywords },
              ]}
            />
            {children}
          </div>
        </>
      )}
    />
  )
}

export default Layout
