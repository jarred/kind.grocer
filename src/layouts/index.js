import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import ReactGA from 'react-ga'

import KindLogo from '../components/kind-logo'

import '../css/normalize.css'
import './index.css'

ReactGA.initialize('UA-71711569-9')
ReactGA.pageview(window.location.pathname + window.location.search)

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
      ]}
    />
    <div className="internal">
      <Link to="/">
        <KindLogo />
      </Link>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
