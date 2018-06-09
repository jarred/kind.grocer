import React, { Component } from 'react'
export default class Laybuy extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log('hello')
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="header">Sign up to our newsletter for updates</div>
        <div className="field">
          <input
            defaultValue=""
            placeholder="Your email address"
            name="EMAIL"
            autoCorrect="off"
            autoCapitalize="off"
            type="email"
          />
          <button
            type="submit"
            className="btn pitch"
            name="subscribe"
            id="Subscribe"
          >
            GO
          </button>
        </div>
      </form>
    )
  }
}
