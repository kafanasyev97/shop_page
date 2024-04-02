import { createContext, useState } from 'react'
import Footer from './assets/components/Footer/Footer'
import Header from './assets/components/Header/Header'
import Product from './assets/components/Product/Product'

export const SumContext = createContext()

function App() {
  const [sum, setSum] = useState(0)
  const [count, setCount] = useState(0)
  const [isCounter, setIsCounter] = useState(false)
  return (
    <SumContext.Provider
      value={{
        sum,
        setSum,
        count,
        setCount,
        isCounter,
        setIsCounter,
      }}
    >
      <Header />
      <Product />
      <Footer />
    </SumContext.Provider>
  )
}

export default App
