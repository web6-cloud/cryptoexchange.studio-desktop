declare module '*.css'
declare module '*.scss'
declare module '*.sass'
declare module '*.jpeg'
declare module '*.jpg'
declare module '*.png'
declare module '*.svg'
declare module '*.gif'

declare namespace Logo {
  interface LogoProps {
    type: logoType
    color: logoColor
  }

  interface LogoColors {
    [name: string]: string
  }

  type logoType = 'horizontal' | 'square' | 'picto'
  type logoColor = 'blue' | 'white' | 'black'

  interface Layouts {
    horizontal: Layout
    square: Layout
    picto: Layout
  }

  interface Layout {
    w: number
    h: number
    picto: Placement
    name: Placement
    website: Placement
  }
  interface Placement {
    x: number
    y: number
    w: number
    h: number
  }
}
