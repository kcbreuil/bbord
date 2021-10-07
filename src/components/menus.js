import React, { useState } from "react"
import beerMenu from "../images/beerMenu.png"
import wineMenu from "../images/wineMenu.jpeg"
import bottleMenu from "../images/bottleMenu.jpeg"
import cocktailMenu from '../images/cocktailMenu.jpeg'
import Modal from "react-modal"
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const customStyles = {
  content: {
    maxWidth: "50%",
    maxHeight: "75%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    background: "#FFFFFF",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
    borderRadius: "23px",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    zIndex: "10",
  },
}

export default function Menus() {
  const [cocktailsIsOpen, setCocktailsIsOpen] = useState(false)
  const [beerIsOpen, setBeerIsOpen] = useState(false)
  const [wineModalIsOpen, setWineModalIsOpen] = useState(false)
  const [bottlesModalIsOpen, setBottlesModalIsOpen] = useState(false)

  return (
    <section id="rentals" className="my-20">
      <h2 className="text-center text-yellow-500 text-4xl">Menus</h2>
      <div className="grid grid-flow-col gap-4 m-4">
        <button
          className="border-2 p-2 text-center hover:bg-yellow-500 hover:text-black"
          onClick={() => setCocktailsIsOpen(true)}
        >
          Cocktails
        </button>
        <Modal style={customStyles} isOpen={cocktailsIsOpen}>
          <button
            className="text-black"
            onClick={() => setCocktailsIsOpen(false)}
          >
            <FontAwesomeIcon icon={faTimesCircle} />
          </button>
          <img src={cocktailMenu} />
        </Modal>
        <button
          className="border-2 p-2 text-center hover:bg-yellow-500 hover:text-black"
          onClick={() => setBeerIsOpen(true)}
        >
          Beer
        </button>
        <Modal style={customStyles} isOpen={beerIsOpen}>
          <button className="text-black" onClick={() => setBeerIsOpen(false)}>
            <FontAwesomeIcon icon={faTimesCircle} />
          </button>
          <img src={beerMenu} />
        </Modal>
        <button
          className="border-2 p-2 text-center hover:bg-yellow-500 hover:text-black"
          onClick={() => setWineModalIsOpen(true)}
        >
          Wine
        </button>
        <Modal style={customStyles} isOpen={wineModalIsOpen}>
          <button
            className="text-black"
            onClick={() => setWineModalIsOpen(false)}
          >
            <FontAwesomeIcon icon={faTimesCircle} />
          </button>
          <img src={wineMenu} />
        </Modal>
        <button
          className="border-2 p-2 text-center hover:bg-yellow-500 hover:text-black"
          onClick={() => setBottlesModalIsOpen(true)}
        >
          Bottles
        </button>
        <Modal style={customStyles} isOpen={bottlesModalIsOpen}>
          <button
            className="text-black"
            onClick={() => setBottlesModalIsOpen(false)}
          >
            <FontAwesomeIcon icon={faTimesCircle} />
          </button>
          <img src={bottleMenu} />
        </Modal>
      </div>
      <a
        className="border-2 p-4 m-4 flex justify-center hover:bg-yellow-500 hover:text-black"
        href="https://www.exploretock.com/blackbirdordinary/"
      >
        Make a reservation
      </a>
    </section>
  )
}
