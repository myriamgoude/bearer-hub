import { css } from 'emotion'
import { colors } from '../../styles/variables'

export default {
  link: css`
    &:hover,
    &:focus {
      text-decoration: none;
    }
    padding: 0.6rem 0.75rem;
    min-width: 2rem;
    line-height: 2em;
    font-size: 14px;
    letter-spacing: 0.12px;
    line-height: 17px;
    color: ${colors.branded.black};
  `,
  list: css`
    margin: 0;
  `
}
