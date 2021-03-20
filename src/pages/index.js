import React from "react"
import { graphql } from "gatsby"
import PropTypes from 'prop-types'
import Layout from "../components/layout"
import Map from "../components/map"
import Hero from "../components/hero"
import Info from '../components/info'

export default function Home({ data }) {
  const { heroImage } = data
  return (
    <Layout>
      <Hero heroImage={heroImage} />
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
  }
`

Home.propTypes = {
  data: PropTypes.shape({
    heroImage: PropTypes.object.isRequired,
  }).isRequired,
}