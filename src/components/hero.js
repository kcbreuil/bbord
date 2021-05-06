import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import tw from "twin.macro"

import Img from "gatsby-image"

const StyledSection = styled.section`
  ${tw`w-screen min-h-1/2-screen relative`}
`

export default function Hero({ heroImage }) {
    const {
        childImageSharp: { fluid },
    } = heroImage;

  return (
    <StyledSection>
      <Img fluid={fluid} />
    </StyledSection>
  )
}

Hero.propTypes = {
    heroImage: PropTypes.object.isRequired,  
}
