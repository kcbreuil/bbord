import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

export default function Hero({ heroImage, isHero }) {
  const {
    childImageSharp: { fluid },
  } = heroImage

  return (
    <section className="w-screen relative">
      <Img fluid={fluid} />
      {isHero && (
        <h1 className="text-2xl md:text-5xl opacity-75 absolute bottom-0 right-0 p-4 md:p-2">
          Blackbird Ordinary
        </h1>
      )}
    </section>
  )
}

Hero.propTypes = {
  heroImage: PropTypes.object.isRequired,
  isHero: PropTypes.bool.isRequired,
}
