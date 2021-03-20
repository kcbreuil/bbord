import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

const StyledLinks = styled.footer`
    ${tw`my-4 text-white flex justify-center gap-16`}

  color: white;
  a:visited {
      color: white;
  }
`
const StyledFooter = styled.div`
    ${tw`m-4`}
`;

export default function Footer() {
  return (
    <StyledFooter className="footer">
      <StyledLinks className="footer-social footer-section">
        <a href="https://www.facebook.com/blackbirdordinary" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://twitter.com/BlackbirdO" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com/blackbirdordinary/?hl=en" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </StyledLinks>
      <h5>729 sw 1st avenue miami fl 33130</h5>
      <h5>© {new Date().getFullYear()} Blackbird Ordinary</h5> 
    </StyledFooter>
  )
}
