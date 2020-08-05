import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Rayeable"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./doSomethingGreat.jpg" alt="Do Something Great" />
        <h1>
          Hello World, I am Raye{" "}
          <span role="img" aria-label="female-technologist">
            👩🏻‍💻
          </span>
        </h1>
        <p>Rayeable is about realizing ability and helping others to realize their own potential for greatness. </p>
        <p>Together, we will do great things.</p>
        <Link to="/blog/">
          <Button marginTop="35px">Let's Get Started</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
