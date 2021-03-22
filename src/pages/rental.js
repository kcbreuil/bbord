import React from "react"
import {graphql} from 'gatsby'
import PropTypes from 'prop-types'

import ContactForm from "../components/contactForm"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/hero'

const copy = {
        heading: 'For all inquiries, please fill out the form below and we’ll be in touch soon.',
        text: 'party time'
    
}

export default function RentalPage({data}) {
    const { heroImage } = data
    return (
      <Layout>
        <SEO title="Rental" />
        <Hero heroImage={heroImage}/>
        <ContactForm formHeading={copy.heading} buttonText={copy.text}/>
      </Layout>
    )
} 


export const query = graphql`
  query RentalPage {
    heroImage: file(relativePath: { regex: "/bar/" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

RentalPage.propTypes = {
  data: PropTypes.shape({
    heroImage: PropTypes.object.isRequired,
  }).isRequired,
}


