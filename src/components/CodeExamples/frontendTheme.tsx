const frontendTheme = {
  plain: {
    backgroundColor: 'white',
    color: '#9a86fd'
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#999988',
        fontstyle: 'italic'
      }
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7
      }
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: '#e3116c'
      }
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: '#393A34'
      }
    },
    {
      types: ['entity', 'url', 'symbol', 'number', 'boolean', 'variable', 'constant', 'property', 'regex', 'inserted'],
      style: {
        color: '#36acaa'
      }
    },
    {
      types: ['atrule', 'keyword', 'attr-name', 'autohotkey', 'selector'],
      style: {
        color: '#00a4db'
      }
    },
    {
      types: ['function', 'deleted', 'autohotkey', 'tag'],
      style: {
        color: '#9a050f'
      }
    },
    {
      types: ['tag', 'selector', 'autohotkey', 'keyword'],
      style: {
        color: '#00009f'
      }
    },
    {
      types: ['important', 'function', 'bold'],
      style: {
        fontWeight: 'bold'
      }
    },
    {
      types: ['itatic'],
      style: {
        fontStyle: 'italic'
      }
    }
  ]
}

export default frontendTheme
