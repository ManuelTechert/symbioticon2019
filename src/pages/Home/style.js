import styled from 'styled-components'
import { theme } from '../../components/theme'

export const Ball = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 100%;
  background-color: ${props => (props.filled ? theme.brand.darkblue : 'none')}
  border: 1px solid ${theme.brand.darkblue};
  color: ${props => (props.filled ? theme.bg.default : theme.brand.darkblue)}
  text-align: center;
  vertical-align: center;
  padding: 4px;
  padding-bottom: 1px;
  font-weight: 500;
  margin-right: 8px;
`

export const BallContainer = styled.div`
    display: flex;
    flex-direction: column,
    text-align: center;
    width: 100%;
    justify-content: center;
`
