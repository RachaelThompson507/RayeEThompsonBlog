import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "RayeEThompson"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./blogHomePage.jpg" alt="You Got This" />
        <h1>
          Hello World{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to my Blog created with Gatsby.</p>
        <p>Now let's get into all that is awesome!</p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
