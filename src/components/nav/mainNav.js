import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

export default function MainNav({ navItems }) {
  return (
    <ul className="hidden lg:flex flex-row items-center justify-between self-center">
      {navItems.map(item => {
        return (
          <li key={item.link} className="group relative">
            <Link
              className="block ml-8 text-xl hover:text-yellow-500"
              to={`${item.link}`}
            >
              {item.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

MainNav.propTypes = {
  navItems: PropTypes.array.isRequired,
}
