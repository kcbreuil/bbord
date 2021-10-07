import React from "react"
import { Link } from "gatsby"

export default function PrivateEvents() {
  return (
    <section className="px-4">
        <h2 className="uppercase text-3xl md:text-4xl mt-4">
          Plan your event with us at Blackbird
        </h2>
        <p className="text-yellow-500 py-4">
          Planning a party for your abuela, the future bride-to-be or your kids
          bat mitzvah?
        </p>
        <p>
          Our space can accomodate up to xxxx people. Other sweet verbiage about
          why renting space at blackbird is an absolute must.
          <div className="pt-10 mb-20">
            <Link
              className="text-center border-white border-2 p-4"
              to="/rental"
            >
              Plan your event
            </Link>
          </div>
        </p>
    </section>
  )
}
