import * as React from 'react'
import { css } from '@emotion/core'

import { Button, Clearfix, HeroLined, Page, PageMetadata, Section, Text } from '../../components'

import IndexLayout from '../../layouts'
import heroStyles from '../../components/HeroPanel/HeroPanel.style'
import { colors } from '../../styles/variables'

export const styleForm = css`
  max-width: 30rem;
  background: ${colors.white};
  margin: 0 auto;
  padding: 2.5rem 2.5rem;
  box-shadow: 0 2px 4px 0 rgba(3, 13, 54, 0.06);

  &.form-success {
    padding: 4rem;
    text-align: center;
  }
`

export const styleFormGroup = css`
  display: block;
  margin: 0.5rem 0;

  & .form-label,
  & .form-input {
    display: block;
    width: 100%;
  }

  & .form-label {
    margin-bottom: 0.5rem;
  }

  & .form-input {
    border: 1px solid #c2c9ea;
    border-radius: 2px;
    background-color: #ffffff;
    min-height: 3rem;
    padding: 0.5rem;
    outline: none;
  }

  & .form-input:focus {
    border-color: #f7c543;
  }

  & .form-textarea {
    min-height: 8rem;
  }

  &.form-submit {
    margin-top: 2rem;
    text-align: right;
  }
`

export const ContactFormHero = () => (
  <HeroLined>
    <Text tag="h1" text="Get in Touch" />
    <Clearfix />
    <Text
      tag="h3"
      text="Use the form below to get in touch with Bearer team."
      style={css`
        max-width: 25rem;
      `}
    />
  </HeroLined>
)

const ContactFormPage: GatsbyPage = ({ location }) => (
  <IndexLayout location={location}>
    <PageMetadata title="Contact us" />
    <Page css={[heroStyles.styleDefaultCurve]}>
      <ContactFormHero />
      <Section>
        <form name="contact" method="POST" data-netlify="true" css={styleForm} action="/contact/success">
          <div className="form-group" css={styleFormGroup}>
            <label>
              <span className="form-label">Your name*</span>
              <input type="text" className="form-input" name="fullname" required />
            </label>
          </div>
          <div className="form-group" css={styleFormGroup}>
            <label>
              <span className="form-label">Email*</span>
              <input type="email" className="form-input" name="email" required />
            </label>
          </div>

          <div className="form-group" css={styleFormGroup}>
            <label>
              <span className="form-label">Company</span>
              <input type="text" className="form-input" name="company" />
            </label>
          </div>

          <div className="form-group" css={styleFormGroup}>
            <label>
              <span className="form-label">Phone number</span>
              <input type="tel" className="form-input" name="phone" />
            </label>
          </div>

          <div className="form-group" css={styleFormGroup}>
            <label>
              <span className="form-label">Your message</span>
              <textarea className="form-input form-textarea" name="message" />
            </label>
          </div>
          <div className="form-group form-submit" css={styleFormGroup}>
            <Button data-type="submit" text="Submit request" link="submit" />
          </div>
        </form>
      </Section>
    </Page>
  </IndexLayout>
)

export default ContactFormPage
