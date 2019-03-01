interface IGraphImage {
  title?: string
  alt?: string
  className?: any
  outerWrapperClassName?: any
  style?: object
  image?: {
    handle?: string
    height?: number
    width?: number
  }
  fit?: string
  maxWidth?: number
  withWebp?: boolean
  transforms?: []
  blurryPlaceholder?: boolean
  backgroundColor?: any
  fadeIn?: boolean
  baseURI?: string

  onLoad?: () => any
  onImageLoaded?: () => void
  handleRef?: () => void
  render?: () => any
}

declare module 'graphcms-image' {
  export default class GraphImage extends React.Component<IGraphImage> {}
}
