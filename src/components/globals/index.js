// global helpers and functions

import { css } from 'styled-components'
import styled from 'styled-components'
import { theme } from '../theme'

export const Root = styled.div`
  display: flex;
  flex-direction: column;
`

export const Body = styled.div`
  flex-grow: 1;
`

export const Larger = styled.div`
  font-size: larger;
  margin-bottom: 5px;
`
export const Subheading = styled.h1`
  font-weight: bold;
  font-size: 24px;
`

export const Smaller = styled.div`
  margin-top: 5px;
  font-size: smaller;
`

export const Space32 = styled.div`
  margin-bottom: 32px;
`

export const SmallRedCenter = styled.div`
  font-weight: bold;
  font-size: 8px;
  line-height: 8px;
  color: ${theme.brand.red};
  text-align: center;
  margin-top: 8px;
  margin-bottom: 32px;
`

export const Shadows = {
  default: css`
    box-shadow: ${theme.shadows.default};
    transition: ${theme.animations.default};
  `,
  hover: css`
    box-shadow: ${theme.shadows.hover};
    transition: ${theme.animations.hover};
  `,
  active: css`
    box-shadow: ${theme.shadows.active};
    transition: ${theme.animations.active};
  `,
}

// global styled components
export const Container = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
`
export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-top: auto;
`
export const CardContainer = styled.div`
  margin-bottom: 30px;
`
export const CardTitle = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin-top: auto;
  margin-bottom: 8px;
`
export const Card = styled.div`
    background-color: ${props => (props.bg ? props.bg : theme.bg.default)};
    color: ${props => (props.color ? props.color : theme.text.default)};
    border-radius 12px;
    padding: 16px;
    margin-bottom: 16px;
    font-size: 16px;

    ${Shadows.default};

  &:hover {
    ${Shadows.hover};
  }

  &:active {
    ${Shadows.active};
  }
`

// css for blog content (written), so I mean content is THE REAL content
export const Content = css`
  h1 {
    font-size: 40px;
    font-weight: 700;
    color: ${theme.text.default};
    margin-top: 28px;
  }

  h2 {
    font-size: 32px;
    font-weight: 700;
    color: ${theme.text.default};
    margin-top: 26px;
  }

  h3 {
    font-size: 24px;
    font-weight: 600;
    color: ${theme.text.default};
    margin-top: 24px;
  }

  h4 {
    font-size: 20px;
    font-weight: 600;
    color: ${theme.text.default};
    margin-top: 16px;
  }

  h5 {
    font-size: 18px;
    font-weight: 600;
    color: ${theme.text.default};
    margin-top: 16px;
  }

  h6 {
    font-size: 16px;
    font-weight: 500;
    color: ${theme.text.default};
    margin-top: 16px;
    text-transform: uppercase;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.6;
    color: ${theme.text.secondary};
    margin-top: 16px;
  }

  a {
    color: ${theme.brand.default};
    font-weight: 500;
  }

  a:hover {
    text-decoration: underline;
  }

  a:hover button {
    text-decoration: none !important;
  }

  ul,
  ol {
    margin-left: 24px;
    margin-top: 12px;
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.5;
    color: ${theme.text.secondary};
    margin-top: 16px;
  }

  li {
    line-height: 1.6;
    padding: 4px 0;
  }

  strong {
    font-weight: 600;
  }
`

// input: color and amount the color should be tinted. Returns the tinted color
export const tint = (hex, amount) => {
  let R = parseInt(hex.substring(1, 3), 16)
  let G = parseInt(hex.substring(3, 5), 16)
  let B = parseInt(hex.substring(5, 7), 16)

  const getSingle = number => parseInt((number * (100 + amount)) / 100, 10)

  R = getSingle(R)
  G = getSingle(G)
  B = getSingle(B)

  R = R < 255 ? R : 255
  G = G < 255 ? G : 255
  B = B < 255 ? B : 255

  const getDouble = number =>
    number.toString(16).length === 1
      ? `0${number.toString(16)}`
      : number.toString(16)

  const RR = getDouble(R)
  const GG = getDouble(G)
  const BB = getDouble(B)

  return `#${RR}${GG}${BB}`
}

// convert to rgb
export const hexa = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16)

  const g = parseInt(hex.slice(3, 5), 16)

  const b = parseInt(hex.slice(5, 7), 16)

  if (alpha >= 0) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }
  return `rgb(${r}, ${g}, ${b})`
}
