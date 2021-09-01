import React, { CSSProperties, HTMLAttributes } from "react"

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant? : "primary" | "secondary" | "ghost" | "link" | "text"
  colors?: string | string[]
  theme?: 'dark' | 'light'
}
export class Button extends React.Component<ButtonProps,{},{}> {
  styles: CSSProperties
  constructor(props: ButtonProps | Readonly<ButtonProps>) {
    super(props)
    
    this.props.colors?this.styles.color = this.props.colors[this.props.theme==='dark'?1:0]:null
  }


  render() {
    return (
      <button className={['btn',this.props.variant].join(' ')} style={this.styles} {...this.props}>
        {this.props.children}
      </button>
    )
  }
}