import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header>
        <a href="/">Amazona</a>
      </header>
      <main>
        list products
      </main>
    </div>
  )
}

export default App
