import { BoxContainer, Label, Value } from '../styles/components/InfoBox'

interface Props {
  label: string
  value: string | React.ReactElement
}
const InfoBox = ({ label, value }: Props) => (
  <BoxContainer>
    {typeof value === 'string' ? <Value>{value}</Value> : value}
    <Label>{label}</Label>
  </BoxContainer>
)

export default InfoBox
