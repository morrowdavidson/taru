import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Logo from "../images/Logo.svg"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Taru" keywords={[`massage`, `yogo`, `retreats`]} />
    <div style={{marginTop: '25vh', height: '200px', overflow: 'hidden' }}>
      <Image />
    </div>
    <div style={{display:'block', position: 'relative', top: '-150px', marginLeft: 'auto', marginRight: 'auto', width:'190px'}} >
      <img src={Logo} />
    <p style={{display:'block', position: 'relative', left:'25px', top: '-30px'}}>Coming soon...</p>
    </div>
  </Layout>
)

export default IndexPage
