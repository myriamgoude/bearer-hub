import { colors } from '../../styles/variables'

const backendTheme = {
  plain: {
    color: '#D4D4D4',
    backgroundColor: colors.codes.backendBGColor
  },
  styles: [
    {
      types: ['prolog'],
      style: {
        color: '#4a5f78'
      }
    },
    {
      types: ['comment'],
      style: {
        color: '#4a5f78'
      }
    },
    {
      types: ['builtin', 'changed'],
      style: {
        color: '#3ab2bd'
      }
    },
    {
      types: ['tag', 'operator', 'number'],
      style: {
        color: '#0aa370'
      }
    },
    {
      types: ['inserted'],
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
      types: ['attr-name'],
      style: {
        color: '#7eb6f6'
      }
    },
    {
      types: ['variable'],
      style: {
        color: '#47ebb4'
      }
    },
    {
      types: ['deleted', 'string'],
      style: {
        color: '#ec8b63'
      }
    },
    {
      types: [
        'string',
        'entity',
        'url',
        'attr-value',
        'keyword',
        'control',
        'directive',
        'unit',
        'statement',
        'regex',
        'atrule'
      ],
      style: {
        color: '#47ebb4'
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
        color: '#ebf4ff'
      }
    },
    {
      types: ['punctuation'],
      style: {
        color: '#4a5f78'
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
