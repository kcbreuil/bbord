import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Draggable from 'react-draggable';
import Img from 'gatsby-image'

import logo from '../images/logo.png'
import ContactForm from '../components/contactForm'

const ContactStyle = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledLabel = styled.label`
  display: flex;
`

export default function ContactPage() {
  return (
    <Layout>
      <SEO title="Contact" />
      <h1>let's connect</h1>
          <Img fluid={logo} alt="logo" />
      
      <ContactForm />
    </Layout>
  )
  
} 
