import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './componentes/Navbar/Navbar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import CartWidget from './componentes/CartWidget/CartWidget'
import ItemCount from './componentes/ItemCount/ItemCount'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <ItemListContainer
        title = 'Bienvenido'
      />
    </>
  )
}

export default App
