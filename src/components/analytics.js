import React from 'react'
import ReactGA from 'react-ga'

class Analytics extends React.Component {
  componentDidMount() {
    ReactGA.initialize('UA-71711569-9')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }
  render() {
    return null
  }
}

export default Analytics
