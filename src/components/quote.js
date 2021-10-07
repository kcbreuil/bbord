import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

const StyledQuote = styled.blockquote`
  ${tw`relative`}

  &:after {
    content: "”";
    position: absolute;
    bottom: -43px;
    right: 25%;
    font-size: 10rem;
    line-height: 0;
  }
`

export default function Quote() {
  return (
    <section className="flex self-center justify-center py-20">
      <StyledQuote className="self-center max-w-2xl p-10 border-t-2 border-b-2">
        <h2 className="relative text-3xl md:text-4xl font-extrabold">
          Just like your neighborhood bar—but with a better looking clientele.
        </h2>
        <h4 className="font relative pt-4 font-normal">
          &mdash;Condé Nast Traveler
        </h4>
      </StyledQuote>
    </section>
  )
}

