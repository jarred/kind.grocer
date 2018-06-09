import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <p>A modern, plant-based grocer & deli coming soon to Vogel St. Dunedin.</p>
    <div className="cta">
      <Link to="/subscribe/">Subscribe for updates</Link>
      <a target="_blank" href="http://instagram.com/kind.grocer">
        Follow us on Instagram
      </a>
    </div>
  </div>
)

export default IndexPage
