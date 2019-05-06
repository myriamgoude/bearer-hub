import * as React from 'react'
import { css } from '@emotion/core'

import { Clearfix, HeroLined, Layout, Page, PageMetadata, Section, Text } from '../../components'
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

    input[type='submit'] {
      border-radius: 4px;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border: 0;
      cursor: pointer;
      font-weight: 600;
      background-color: #ffc400;
      color: #030d36;
      height: 48px;
      line-height: 48px;
      padding: 0 1.5rem;
    }
    input[type='submit']:hover {
      background-color: #e9b300;
    }
  }
`

export const ContactFormHero = () => (
  <HeroLined>
    <Text tag="h1" text="Get in Touch" />
    <Clearfix />
    <Text
      tag="h3"
      text="Use the form below to get in touch with the Bearer team."
      style={css`
        max-width: 25rem;
      `}
    />
  </HeroLined>
)

const ContactFormPage: GatsbyPage = ({ location }) => (
  <Layout location={location}>
    <PageMetadata title="Bearer | Contact us" description="Stay in touch with us in sending your questions " />
    <Page css={[heroStyles.styleDefaultCurve]}>
      <ContactFormHero />
      <Section>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          css={styleForm}
          action="/contact/success"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
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
            <input type="submit" value="Submit request" />
          </div>
        </form>
      </Section>
    </Page>
  </Layout>
)

export default ContactFormPage
