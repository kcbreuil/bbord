import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import Map from "../components/map"
import Hero from "../components/hero"
import Info from "../components/info"
// import Quote from '../components/quote'

export default function Home({ data }) {
  const { heroImage, logo } = data
  //   const content = {
  //     quote:  'Best place to party in Miami'

  // }
  return (
    <Layout>
      <Hero heroImage={heroImage} />
      {/* <Quote quote={content.quote} /> */}
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
