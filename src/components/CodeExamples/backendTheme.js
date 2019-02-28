const backendTheme = {
  plain: {
    color: '#D4D4D4',
    backgroundColor: '#1E1E1E'
  },
  styles: [
    {
      types: ['prolog'],
      style: {
        color: 'rgb(0, 0, 128)'
      }
    },
    {
      types: ['comment'],
      style: {
        color: '#8191b1'
      }
    },
    {
      types: ['builtin', 'tag', 'changed', 'keyword'],
      style: {
        color: '#3ab2bd'
      }
    },
    {
      types: ['number', 'inserted'],
      style: {
        color: 'rgb(181, 206, 168)'
      }
    },
    {
      types: ['constant'],
      style: {
        color: '#a6b0f9'
      }
    },
    {
      types: ['attr-name', 'variable'],
      style: {
        color: 'rgb(156, 220, 254)'
      }
    },
    {
      types: ['deleted', 'string'],
      style: {
        color: '#ec8b63'
      }
    },
    {
      types: ['symbol'],
      style: {
        color: '#ec8b63'
      }
    },
    {
      types: ['selector'],
      style: {
        color: 'rgb(215, 186, 125)'
      }
    },
    {
      types: ['punctuation'],
      style: {
        color: 'rgb(128, 128, 128)'
      }
    },
    {
      types: ['operator'],
      style: {
        color: '#ae3e88'
      }
    },
    {
      types: ['class-name'],
      style: {
        color: '#a6e22e'
      }
    }
  ]
}

export default backendTheme
