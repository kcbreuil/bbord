import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Logo from "./svgs/Logo"

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
    <header
      className={`fixed transition w-full z-10 ${
        isScrolled ? "bg-black border-b-2" : "bg-transparent"
      }`}
      isScrolled={isScrolled}
    >
      <nav className="h-24 flex justify-between items-center p-5 text-white opacity-80">
        <Link
          to="/"
          className="text-2xl md:text-4xl hover:text-yellow-500 hover:opacity-100"
        >
          {/* {siteTitle} */}
          <Logo fill="ffffff" />
        </Link>

        <MobileNav
          handleNavToggle={handleNavToggle}
          isMobileNavOpen={isMobileNavOpen}
          navItems={nav}
        />
        {/* <Link to="/reservations">reservations</Link> */}
        {/* <Link to="/#info">info</Link> */}
        <MainNav navItems={nav} />
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
