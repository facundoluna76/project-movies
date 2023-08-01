import { useState } from 'react'
import { Moviesgrid } from './Moviesgrid'
import stylesApp from "./App.module.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1 className={stylesApp.title}>Movies</h1>
      </header>
      <main>
          <Moviesgrid/>
      </main>
    </>
  )
}

export default App
