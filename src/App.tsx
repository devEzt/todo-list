import { useState } from 'react'
import * as C from './App.styles'
import { Item } from './types/Item'
import { ListItem } from './components/ListItem'
import { AddItem } from './components/AddItem'
import { setMaxListeners } from 'events'

const App = () => {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: 'Comprar pao na padaria',
      done: false,
    },
    {
      id: 2,
      name: 'Comprar leite na padaria',
      done: false,
    },
    {
      id: 3,
      name: 'Comprar pinga na bodega',
      done: true,
    },
  ])

  const handleAddTask = (taskMame: string) => {
    let newList = [...list]
    newList.push({
      id: 123,
      name: '',
      done: false,
    })
    setList(newList)
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Atividades</C.Header>

        <AddItem />

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </C.Area>
    </C.Container>
  )
}

export default App
