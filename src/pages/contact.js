import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Img from 'gatsby-image'

import logo from '../images/logo.png'
import ContactForm from '../components/contactForm'

const ContactStyle = styled.img`
  display: flex;
  justify-content: center;
  height: 250px;
  margin-top: 150px;
  margin-left: 50px;
`

const copy = {
  heading: 'let\s connect',
  text: 'submit'

}

export default function ContactPage() {
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactStyle src={logo} alt="logo" />
      <ContactForm formHeading={copy.heading} buttonText={copy.text}/>
    </Layout>
  )
  
} 
