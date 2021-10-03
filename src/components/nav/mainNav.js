import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

export default function MainNav({ navItems }) {
  return (
    <ul className="hidden lg:flex flex-row items-center font-semibold leading-5 justify-between self-center">
      {navItems.map(item => {
        return (
          <li key={item.link} className="group relative">
            <Link
              className="block ml-8 text-xl"
              activeClassName="active-nav-link"
              to={`${item.link}`}
            >
              {item.name}
            </Link>
            <ul className="absolute">
              {item.subnav
                ? item.subnav.map(subitem => {
                    return (
                      <li key={subitem.sublink}>
                        <Link
                          className="block invisible p-2 pointer-events-none group-hover:pointer-events-auto group-hover:visible group-focus:visible"
                          to={`${subitem.subnav}`}
                        >
                          {subitem.sublink}
                        </Link>
                      </li>
                    )
                  })
                : ""}
            </ul>
          </li>
        )
      })}
    </ul>
  )
}

MainNav.propTypes = {
  navItems: PropTypes.array.isRequired,
}
