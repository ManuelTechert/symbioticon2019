import styled from 'styled-components'
import { theme } from '../../components/theme'

export const RankingsContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content; center;
    align-items: center;
    text-align: center;
`
export const RankingRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: ${props => (props.last ? 'auto' : '32px')};
`
export const Points = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
`
export const PointsLarge = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
`
export const Cashback = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
`
export const CashbackLarge = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
`
export const Context = styled.div`
  font-weight: bold;
  font-size: 8px;
  line-height: 8px;
  text-transform: uppercase;

  color: ${theme.brand.grey};
`
export const Dots = styled(Context)`
  color: ${theme.text.default};
  margin-top: 8px;
  margin-bottom: 8px;
`
