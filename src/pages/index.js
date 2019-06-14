import React from "react"

import Layout from "../components/layout"
import StyledBackgroundSection from "../components/background-image"
import SEO from "../components/seo"

import FakeNav from "../components/fakeNav"

const IndexPage = () => (
  <Layout>
    <SEO title="Taru" keywords={[`massage`, `yogo`, `retreats`]} />
    <StyledBackgroundSection />
    <FakeNav />
  </Layout>
)

export default IndexPage
