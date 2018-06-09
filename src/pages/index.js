import React from 'react'
import Link from 'gatsby-link'
import SubscribeForm from '../components/subscribe-form'

const IndexPage = () => (
  <div>
    <p>A modern, plant-based grocer & deli coming soon to Vogel St. Dunedin.</p>

    {false && (
      <div className="cta">
        <a target="_blank" href="http://instagram.com/kind.grocer">
          Follow us on Instagram
        </a>
      </div>
    )}
  </div>
)

export default IndexPage
