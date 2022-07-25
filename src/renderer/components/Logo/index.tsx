import { Component, ReactNode } from 'react'
import { layouts } from './layouts'
import { Name, Picto, Website } from './parts'

export class Logo extends Component {
  static defaultProps: Logo.LogoProps = {
    type: 'picto',
    color: 'blue',
  }

  colorRefs: Logo.LogoColors = {
    blue: '#2f2f88',
    black: '#000',
    white: '#fff',
  }

  layout: Logo.Layout

  color: string

  constructor(props: Logo.LogoProps) {
    super(props)
    this.layout = layouts[this.props['type']]
    this.color = this.colorRefs[this.props['color']]
  }

  render(): ReactNode {
    var styles = `
      #ces-picto .dark { fill: ${this.color} } 
      #ces-picto .dark80 { fill: ${this.color}; opacity: .8 }
      #ces-picto .dark50 { fill: ${this.color}; opacity: .5 }
      #ces-picto .grey { fill: #a7a9ac }
      #ces-picto .orange { fill: #e9a123 }
      #ces-picto .white { fill: #fff }
      #ces-picto .gradient { fill: url(#ces-picto-gradient) }
    `

    var parts = [
      <Picto
        x={this.layout.picto['x']}
        y={this.layout.picto['y']}
        w={this.layout.picto['w']}
        h={this.layout.picto['h']}
      />,
    ]

    if ('picto' !== this.props['layout']) {
      parts.push(
        <Name
          x={this.layout.name['x']}
          y={this.layout.name['y']}
          w={this.layout.name['w']}
          h={this.layout.name['h']}
        />,
        <Website
          x={this.layout.website['x']}
          y={this.layout.website['y']}
          w={this.layout.website['w']}
          h={this.layout.website['h']}
        />
      )
    }

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        id="ces-picto"
        viewBox={`0 0 ${this.layout['w']} ${this.layout['h']}`}
        data-type={this.props['type']}
        data-color={this.props['color']}
      >
        <defs>
          <linearGradient
            id="ces-picto-gradient"
            x1="124.91"
            y1="106.46"
            x2="286.64"
            y2="106.46"
            gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".28" stop-color="#f1592b" />
            <stop offset=".87" stop-color="#e9a123" />
          </linearGradient>
          <style>{styles}</style>
        </defs>
        {parts}
      </svg>
    )
  }
}
