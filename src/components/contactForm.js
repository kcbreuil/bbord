import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import tw from "twin.macro"

const ContactWrapper = styled.section`
  ${tw`text-center`}
`

const StyledForm = styled.form`
  ${tw`flex flex-col items-center mb-4`}
`

const StyledHeading = styled.h1`
  ${tw`font-bold inline-block max-w-xl opacity-50 my-12 text-xl leading-tight items-center`}
`
const InputWrapper = styled.div`
  ${tw`flex flex-col lg:grid lg:grid-cols-2 gap-1`}
`

const StyledButton = styled.button`
  ${tw`border-2 cursor-pointer transition duration-500 ease-out py-2 px-6 text-black bg-gradient-to-r from-red-500 to-yellow-500 max-w-max mt-16 text-xl tracking-widest hover:bg-white`}
`

const StyledInput = styled.input`
  ${tw`border-2 bg-black bg-opacity-50 hover:bg-gradient-to-r from-red-500 to-yellow-500 h-10 mt-2 py-1 px-2 text-lg text-white`}
`

const StyledTextArea = styled.textarea`
  ${tw`border-2 bg-black bg-opacity-50 hover:bg-gradient-to-r from-red-500 to-yellow-500 h-10 mt-2 py-1 px-2 text-lg text-white`}
`

const StyledLabel = styled.label`
  ${tw`flex flex-col mb-4 mx-4 text-sm text-left`}
`

const StyledHoneyPot = styled.p`
  ${tw`hidden`}
`

export default function ContactForm({ formHeading, buttonText }) {
  const [formData, setFormData] = useState(null)
  const [isSubmitFormSuccessful, setIsSubmitFormSuccessful] = useState(false)

  const encode = data => {
    return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join("&")
  }

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...formData,
      }),
    })
      .then(() => setIsSubmitFormSuccessful(true))
      .catch(error => error)
  }
  return (
    <ContactWrapper id="event">
      <StyledHeading>{formHeading}</StyledHeading>
      <br></br>
      {isSubmitFormSuccessful ? (
        <StyledHeading>
          Thank you for reaching out. We'll be in touch soon.
        </StyledHeading>
      ) : (
        <StyledForm
          method="post"
          onSubmit={handleSubmit}
          data-netlify="true"
          netlify-honeypot="bot-field"
          name="contact"
        >
          <StyledHoneyPot>
            <label>
              <input name="bot-field" />
            </label>
          </StyledHoneyPot>
          <InputWrapper>
            <StyledLabel htmlFor="firstName">
              first name
              <StyledInput
                type="text"
                name="name"
                id="firstname"
                onChange={handleChange}
                required
              />
            </StyledLabel>
            <StyledLabel htmlFor="lastName">
              last name
              <StyledInput
                type="text"
                name="name"
                id="lastname"
                onChange={handleChange}
                required
              />
            </StyledLabel>
            <StyledLabel htmlFor="email">
              email
              <StyledInput
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                required
              />
            </StyledLabel>
            <StyledLabel htmlFor="phoneNumber">
              phone number
              <StyledInput
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                onChange={handleChange}
                required
              />
            </StyledLabel>
            <StyledLabel htmlFor="message">
              message
              <StyledTextArea
                type="text"
                name="message"
                id="message"
                onChange={handleChange}
                required
              />
            </StyledLabel>
          </InputWrapper>
          <StyledButton type="submit">{buttonText}</StyledButton>
        </StyledForm>
      )}
    </ContactWrapper>
  )
}

ContactForm.propTypes = {
  formHeading: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
}
