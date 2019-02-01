import * as React from 'react'
import { graphql, Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import HeroPanel from '../components/HeroPanel'
import { IIntegrationProps, IntegrationPanel } from '../components/IntegrationPanel'
import Button from '../components/Button'
import SubHeading from '../components/SubHeading'
import IndexLayout from '../layouts'

import placeholderImage from '../images/homepage-placeholder.png'

interface IIndexPageProps {
  data: {
    site: {
      siteMetadata: IIntegrationProps
    }
  }
}

export const query = graphql`
  query IntegrationQuery {
    site {
      siteMetadata {
        integrations {
          name
        } 
      }
    }
  }
`

export default ({ data }: IIndexPageProps) => (
  <IndexLayout>
    <Page>
      <HeroPanel
        title="Native Integration To power your app"
        image={placeholderImage}>
        Bearer helps apps get connected to the rest of the World. Your users will thank you
        <div>
          <Button primary link="/explore" text="Explore integrations" />
          <Button link="/how-it-works" text="How it works" />
        </div>
        Learn more about <Link to="/native-integration">Native Integrations</Link>
      </HeroPanel>

      <SubHeading>Most Integrated Apps</SubHeading>
      <Container>
        <div>
          <h3>For product manager</h3>
          <div>Start adding the Integration that keeps piling up in your backlog. Add dozens of Integrations that users keep asking for without impacting roadmap and budget.</div>
        </div>
        <div>
          <h3>For Front-End developer</h3>
          <div>Ready to use, one line of code, Web Components that works for your stack, future proof. Offer a standardize experience, customizable to your look and feel.</div>
        </div>
        <div>
          <h3>For Back-End developer</h3>
          <div>Scale your Integration without overloading your codebase with dozens of dependencies, SDK and vendor specific code. Did we mention we also take care of the OAuth flow too?</div>
        </div>
      </Container>

      <SubHeading>A Native Integration in 5 minutes</SubHeading>

      <SubHeading>Featured Integrations</SubHeading>
      <IntegrationPanel integrations={ data.site.siteMetadata.integrations }></IntegrationPanel>

      <SubHeading>Why use Bearer?</SubHeading>

      <HeroPanel
        title="Looking to build your own Native Integration?"
        image={placeholderImage}>
        <div><Button primary link="/contact" text="Get in touch" /></div>
      </HeroPanel>

    </Page>
  </IndexLayout>
)
