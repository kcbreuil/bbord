import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

const ContentWrapper = styled.section`
  ${tw`text-center h-auto my-20 flex justify-center`} 

`
const StyledInfo = styled.div`
  ${tw`border-2 border-opacity-5 w-3/12 p-8 place-self-center`} 

font-family: 'Open Sans Condensed', sans-serif;
`
const StyledHeader = styled.h1`
  ${tw`capitalize text-3xl`}
`
const StyledSubHeader = styled.h2`
  ${tw`text-xl font-thin`}
`

export default function Info() {
  return (
    <ContentWrapper>
      <StyledInfo>
        <StyledHeader>Hours</StyledHeader>
        <StyledSubHeader>3 PM - 12 AM</StyledSubHeader>
        <StyledSubHeader>Open 7 days a week</StyledSubHeader>
        <br></br>
        <StyledSubHeader>Happy Hour</StyledSubHeader>
        <StyledSubHeader>
          Monday thru Friday <br></br>3 PM - 8 PM
        </StyledSubHeader>
      </StyledInfo>
    </ContentWrapper>
  )
}
