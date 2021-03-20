import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Draggable from 'react-draggable';
import Img from 'gatsby-image'

import logo from '../images/logo.png'

const ContactStyle = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledLabel = styled.label`
  display: flex;
`

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>let's connect</h1>
    <Draggable>
        <Img fluid={logo} style={{ height: "200px"}} alt="logo" />
    </Draggable>
    <form
      method="post"
      action="https://getform.io/f/fa948382-db58-4c7e-b439-50476b0514df"
    >
      <ContactStyle>
        <StyledLabel>
          Name
          <input type="text" name="name" id="name" />
        </StyledLabel>
        <StyledLabel>
          Email
          <input type="email" name="email" id="email" />
        </StyledLabel>
        <StyledLabel>
          Message
          <textarea name="message" id="message" rows="5" />
        </StyledLabel>
        <button type="submit">Send</button>
        <input type="reset" value="Clear" />
      </ContactStyle>
    </form>
  </Layout>
)

export default ContactPage
