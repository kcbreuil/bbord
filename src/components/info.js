import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import Map from "./map"

// const ContentWrapper = styled.section`
//   ${tw`text-center h-auto my-20 flex justify-center`}
// `
// const StyledInfo = styled.div`
//   ${tw`border-2 border-opacity-5 w-3/12 p-8 place-self-center`}

//   font-family: 'Open Sans Condensed', sans-serif;
// `
// const StyledHeader = styled.h1`
//   ${tw`capitalize text-3xl`}
// `
// const StyledSubHeader = styled.h2`
//   ${tw`text-xl font-thin`}
// `

export default function Info() {
  return (
    <section className="text-center md:divide-x my-20 grid grid-cols-1 md:grid-cols-3">
      <div className="my-4 ">
        <h3 className="text-yellow-500 text-4xl mb-4">Hours</h3>
        <p>Everyday: 3PM - 12AM</p>
        <p>Happy Hour M-F: 3PM - 8PM</p>
      </div>
      <div className="my-4">
        <h3 className="text-yellow-500 text-4xl mb-4">Address</h3>
        <p>729 SW 1st Avenue</p>
        <p>Miami FL 33130</p>
      </div>
      <div className="my-4">
        <h3 className="text-yellow-500 text-4xl mb-4">Contact</h3>
        <p>Tel: </p>
        <p>Email:</p>
      </div>
    </section>
  )
}
