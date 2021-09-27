import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

export default function Hero({ heroImage }) {
  const {
    childImageSharp: { fluid },
  } = heroImage

  return (
    <section className="w-screen min-h-1/2-screen relative">
      <Img fluid={fluid} />
    </section>
  )
}

Hero.propTypes = {
  heroImage: PropTypes.object.isRequired,
}
