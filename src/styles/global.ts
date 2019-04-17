import { colors } from './variables'

export default `
  body {
      background: ${colors.lightGrey}
      color: ${colors.darkBlue}
  }

  b {
    font-family: 'ProximaNova-Semibold'
  }

  a {
    color: ${colors.darkBlue}
    text-decoration: underline
  }

#iubenda-cs-banner {
  position: fixed;
  bottom: 1rem;
  left: 5%;
  background: rgba(4, 12, 52, 0.8);
  z-index: 1000;
  box-shadow: 0 3px 4px 0 rgba(30, 9, 54, 0.1);
  border-radius: 5px;
  text-align: center;
  color: #fff;
  padding: 10px 13px 10px 20px;
  display: inline-block;
  width: 70%;
  max-width: 530px;
}

#iubenda-cs-banner a {
  color: white;
  opacity: 0.8;
}

#iubenda-cs-banner .iubenda-cs-rationale {
  display: flex;
  justify-content: space-between;
}

#iubenda-cs-banner button {
  display: inline-block;
  outline: none;
  background: 0;
  border: 0;
  color: white;
  cursor: pointer;
}

@media all and (min-width: 790px) {
  #iubenda-cs-banner {
    width: 100%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    left: 50%;
  }
}
`
