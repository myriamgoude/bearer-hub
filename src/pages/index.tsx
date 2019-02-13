import * as React from 'react'
import { graphql, Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import HeroPanel from '../components/HeroPanel'
import { IIntegration, IntegrationPanel } from '../components/IntegrationPanel'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import IndexLayout from '../layouts'

import placeholderImage from '../images/homepage-placeholder.png'

interface IIndexPageProps {
  data: {
    graphcms: {
      integrations: IIntegration[]
    }
  }
}

export const query = graphql`
  query IntegrationQuery {
    graphcms {
      integrations(where: { status: PUBLISHED }) {
        name
        slug
      }
    }
  }
`

export default ({ data }: IIndexPageProps) => (
  <IndexLayout>
    <Page>
      <HeroPanel title="Native Integration To power your app" image={placeholderImage}>
        Bearer helps apps get connected to the rest of the World. Your users will thank you
        <div>
          <Button primary link="/explore" text="Explore integrations" />
          <Button link="/how-it-works" text="How it works" />
        </div>
        Learn more about <Link to="/native-integration">Native Integrations</Link>
      </HeroPanel>

      <SectionHeading primaryText="Most Integrated Apps" />
      <Container>
        <div>
          <h3>For product manager</h3>
          <div>
            Start adding the Integration that keeps piling up in your backlog. Add dozens of Integrations that users
            keep asking for without impacting roadmap and budget.
          </div>
        </div>
        <div>
          <h3>For Front-End developer</h3>
          <div>
            Ready to use, one line of code, Web Components that works for your stack, future proof. Offer a standardize
            experience, customizable to your look and feel.
          </div>
        </div>
        <div>
          <h3>For Back-End developer</h3>
          <div>
            Scale your Integration without overloading your codebase with dozens of dependencies, SDK and vendor
            specific code. Did we mention we also take care of the OAuth flow too?
          </div>
        </div>
      </Container>

      <SectionHeading primaryText="A Native Integration in 5 minutes" />

      <SectionHeading primaryText="Featured Integrations" />
      <IntegrationPanel integrations={data.graphcms.integrations} />

      <SectionHeading primaryText="Why use Bearer?" />

      <HeroPanel title="Looking to build your own Native Integration?" image={placeholderImage}>
        <div>
          <Button primary link="/contact" text="Get in touch" />
        </div>
      </HeroPanel>
    </Page>
  </IndexLayout>
)
