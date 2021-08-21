import React from "react"
import './index.sass'

export class Button extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props)
  }

  render() {
    return <button className="btn" {...this.props}>{this.props.children}</button>
  }
}