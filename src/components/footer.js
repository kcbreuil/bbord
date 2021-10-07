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
    <footer className="footer my-4 ">
      <div className="footer-social footer-section my-4 text-white flex justify-center gap-16">
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
      </div>
      <h5>© {new Date().getFullYear()} Blackbird Ordinary</h5>
    </footer>
  )
}
