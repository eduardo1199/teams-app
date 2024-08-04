import { Container,Icon,Title } from './styles'
import { TouchableOpacityProps } from 'react-native'

type GroupCardProps  = {
  title: string
} & TouchableOpacityProps

export function GroupCard({ title, ...props }: GroupCardProps) {
  return (
    <Container {...props}>
      <Icon />

      <Title>
        {title}
      </Title>
    </Container>
  )
}