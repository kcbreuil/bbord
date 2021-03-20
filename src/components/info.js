import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

const ContentWrapper = styled.section`
  ${tw`text-center h-auto my-20`}
`
const StyledInfo = styled.div`
  ${tw``}
`
const StyledHeader = styled.h1`
${tw`capitalize text-5xl mb-4`}

`
const StyledSubHeader = styled.h2`
${tw` text-xl`}

`

export default function Info() {
  return (
    <ContentWrapper>
        <StyledInfo>
            <StyledHeader>Hours</StyledHeader>
            <StyledSubHeader>Open 7 days a week</StyledSubHeader>
            <StyledSubHeader>3 PM - 12 AM</StyledSubHeader>
            <h3>729 sw 1st avenue miami fl 33130</h3>
        </StyledInfo>
    </ContentWrapper>
  )
}
