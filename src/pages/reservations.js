import React from "react"
import {graphql} from 'gatsby'
import PropTypes from 'prop-types'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/hero'



export default function ReservationsPage({data}) {
    const { heroImage } = data
    return (
      <Layout>
        <SEO title="Reservations" />
        <Hero heroImage={heroImage}/>
        <h1>Want to make a reservation?</h1>
        <a href="https://www.exploretock.com/blackbirdordinary/">Click here</a>
      </Layout>
    )
} 


export const query = graphql`
  query ReservationsPage {
    heroImage: file(relativePath: { regex: "/couple/" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

ReservationsPage.propTypes = {
  data: PropTypes.shape({
    heroImage: PropTypes.object.isRequired,
  }).isRequired,
}

