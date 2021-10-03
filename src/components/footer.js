import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
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
  a:hover {
    color: rgb(244, 148, 39);
    opacity: 1;
  }
`
const StyledFooter = styled.div`
  ${tw`m-4`}
`

export default function Footer() {
  return (
    <StyledFooter className="footer">
      <StyledLinks className="footer-social footer-section">
        <a
          href="https://www.facebook.com/blackbirdordinary"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon size="2x" icon={faFacebookF} />
        </a>
        <a
          href="https://twitter.com/BlackbirdO"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon size="2x" icon={faTwitter} />
        </a>
        <a
          href="https://www.instagram.com/blackbirdordinary/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon size="2x" icon={faInstagram} />
        </a>
      </StyledLinks>
      {/* <h5>729 SW 1st Avenue Miami FL 33130</h5>
      <h5 className="font">XXX.XXX.XXX | info@blackbirdordinary.com</h5> */}
      <h5>© {new Date().getFullYear()} Blackbird Ordinary</h5>
    </StyledFooter>
  )
}
