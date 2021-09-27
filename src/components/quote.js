import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import tw from "twin.macro"

const StyledQuote = styled.blockquote`
  ${tw`relative text-center`}


&:before {
	content: '“';
	left: -5rem;
	top: -2rem;
	color: #f1efe6;
	font-size: 8rem;
	width: 4rem;
	height: 4rem;
}

&:after {
	content: '”';
	right: -5rem;
	bottom: 1rem;
	color: #f1efe6;
	font-size: 8rem;
	width: 4rem;
	height: 4rem;
}
`

export default function Quote({ quote }) {
  return <StyledQuote>{quote}</StyledQuote>
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
}
