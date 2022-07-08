import * as C from './styles'
import { Item } from '../../types/Item'

type PropsItem = {
  item: Item
}

export const ListItem = ({ item }: PropsItem) => {
  return (
    <C.Container>
      <input type="checkbox" />
      <label>{item.name}</label>
    </C.Container>
  )
}
