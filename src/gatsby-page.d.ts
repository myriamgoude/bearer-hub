/*
    By defualt gatsby injects some props into page but does not
    provide a type interface so this provides one
    see: https://www.gatsbyjs.org/docs/node-apis/#createPages
    https://www.gatsbyjs.org/docs/migrating-from-v1-to-v2/#4-pass-history-location-and-match-props-to-layout

*/
interface GatsbyPageProps<TData, TPageContext> {
  // use this to avoid deps on window.location
  location: Location
  // use this to avoid deps on window.history
  history: History
  // Query we define on a page is auto injected into here type through TData
  data: TData
  // TODO: Think this is Reach router which routes internally update this if we end up ever using it
  match: any
  // PageContext can be injected via the nodes API any data can be typed here - useful in templates
  pageContext: TPageContext
}
type GatsbyPage<TData = null, TPageContext = {}> = React.SFC<GatsbyPageProps<TData, TPageContext>>
