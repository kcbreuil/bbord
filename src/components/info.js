import React from "react"

export default function Info() {
  return (
    <section className="text-center md:divide-x my-20 grid grid-cols-1 md:grid-cols-3">
      <div className="my-4 ">
        <h3 className="text-yellow-500 text-4xl mb-4">Hours</h3>
        <p>Everyday: 3PM - 5AM</p>
        <p>Happy Hour M-F: 3PM - 8PM</p>
      </div>
      <div className="my-4">
        <h3 className="text-yellow-500 text-4xl mb-4">Address</h3>
        <p>729 SW 1st Avenue</p>
        <p>Miami FL 33130</p>
      </div>
      <div className="my-4">
        <h3 className="text-yellow-500 text-4xl mb-4">Contact</h3>
        <p>
          <a href="tel:8665562570">Tel: 305-671-3307</a>
        </p>
        <p>Email:</p>
      </div>
    </section>
  )
}
