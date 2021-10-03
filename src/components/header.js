import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import tw from "twin.macro"

import MainNav from "./nav/mainNav"
import MobileNav from "./nav/mobileNav"

const nav = [
  {
    name: "private events",
    link: "/rental",
  },
  {
    name: "contact",
    link: "/contact",
  },
]

const StyledHeader = styled.header`
  ${tw`fixed transition w-full z-10`}

  background-color: ${({ isScrolled }) =>
    isScrolled ? `#000000` : `#ffffff00`};
`

const StyledNav = styled.nav`
  height: 100px;
  a {
    text-decoration: none;
    color: white;
    margin-left: 20px;
    opacity: 0.5;
  }
  a:hover {
    color: rgb(244, 148, 39);
    opacity: 1;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  margin: 15px;
  h1 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.25rem;
  }
`

export default function Header({ siteTitle }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const handleNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen)
  }

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })
  return (
    <nav
      className={`fixed transition w-full z-10 ${
        isScrolled ? "bg-black border-b-2" : "bg-transparent"
      }`}
      isScrolled={isScrolled}
    >
      <StyledNav>
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
        <MobileNav
          handleNavToggle={handleNavToggle}
          isMobileNavOpen={isMobileNavOpen}
          navItems={nav}
        />
        {/* <Link to="/reservations">reservations</Link> */}
        {/* <Link to="/#info">info</Link> */}
        {/* <Link to="/rental">private events</Link>
          <Link to="/contact">contact</Link> */}
        <MainNav navItems={nav} />
      </StyledNav>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
