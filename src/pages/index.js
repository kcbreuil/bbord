import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Info from "../components/info"
import Quote from "../components/quote"
import Map from "../components/map"
import SEO from "../components/seo"
import Menus from "../components/menus"
import PrivateEvents from "../components/privateEvents"

export default function Home({ data }) {
  const { heroImage, couple } = data

  return (
    <Layout>
      <SEO title="Home" />
      <Hero heroImage={heroImage} isHero />
      <Quote />
      <Menus />
      <Hero heroImage={couple} />
      <PrivateEvents />
      <Info />
      <Map />
    </Layout>
  )
}

export const query = graphql`
  query HomePage {
    heroImage: file(relativePath: { regex: "/bar/" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    couple: file(relativePath: { regex: "/couple/" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logo: file(relativePath: { regex: "/logo/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

Home.propTypes = {
  data: PropTypes.shape({
    heroImage: PropTypes.object.isRequired,
  }).isRequired,
}
