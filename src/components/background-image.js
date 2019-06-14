import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import styles from "../components/styles.module.css"
import Logo from "../images/Logo.svg"



const BackgroundSection = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "background.png" }) {
          childImageSharp {
            fluid(maxWidth: 50000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.placeholderImage.childImageSharp.fluid
      return (
         <BackgroundImage Tag="section"
                          fluid={imageData}
                          backgroundColor={`#040e18`}
                          className={styles.backgroundImage} 
         > 
          <div className={styles.logoContainer} >
          <img src={Logo} alt="taru"/>
          <p className={styles.comingSoon}>Coming soon...</p>
          </div>
         </BackgroundImage>
      )
    }  
    }
  />
)



export default BackgroundSection