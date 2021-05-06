import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ContactForm from "../components/contactForm"

const ContactStyle = styled(Img)`
  display: flex;
  justify-content: center;
`

const copy = {
  heading: "lets connect",
  text: "submit",
}

export default function ContactPage({ data }) {
  const { logo } = data
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactStyle fluid={logo.childImageSharp.fluid} />
      <ContactForm formHeading={copy.heading} buttonText={copy.text} />
    </Layout>
  )
}

export const query = graphql`
  query ContactPageQuery {
    logo: file(relativePath: { regex: "/logoBird/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

ContactPage.propTypes = {
  logo: PropTypes.shape({
    childImageSharp: PropTypes.object.isRequired,
  }).isRequired,
}
