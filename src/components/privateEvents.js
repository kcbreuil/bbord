import React from "react"
import { Link } from "gatsby"

export default function PrivateEvents() {
  return (
    <section className="grid grid-cols-2 mx-10 md:mx-28 gap-4" id="rentals">
      <h2 className="uppercase text-4xl text-center mb-4">
        Plan your event with us at Blackbird
      </h2>
      <p className="text-yellow-500">
        Planning a party for your abuela, the future bride-to-be or your kids
        bat mitzvah?
      </p>
      <p className="col-span-2">
        Our space can accomodate up to xxxx people. Other sweet verbiage about
        why renting space at blackbird is an absolute must.
        <div className="mt-8">
          <Link
            className="text-center border-white border-2 p-4 mt-10"
            to="/rental"
          >
            Plan your event
          </Link>
        </div>
      </p>
    </section>
  )
}
