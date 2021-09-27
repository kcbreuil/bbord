import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Info from "../components/info"
import ContactForm from "../components/contactForm"
import Quote from "../components/quote"
import Map from "../components/map"

export default function Home({ data }) {
  const { heroImage, logo } = data

  const copy = {
    heading: "lets connect",
    text: "submit",
  }
  return (
    <Layout>
      <Hero heroImage={heroImage} />
      <Quote />
      <Info />
      <Map />
      {/* <ContactForm formHeading={copy.heading} buttonText={copy.text} /> */}
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
