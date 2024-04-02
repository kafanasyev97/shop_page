import { useContext } from 'react'
import { SumContext } from '../../../App'

const ProductCounter = () => {
  const { sum, setSum, count, setCount } = useContext(SumContext)

  const decrementSum = () => {
    if (sum - 2000 < 0) {
      setSum(0)
      setCount(0)
      return
    }
    setSum((state) => state - 2000)
    setCount((state) => state - 1)
  }

  const incrementSum = () => {
    setSum((state) => state + 2000)
    setCount((state) => state + 1)
  }

  return (
    <div className="product__info-counter">
      <img onClick={decrementSum} src="/minus.svg" alt="minus" />
      <input placeholder={count + ' шт.'} type="text" />
      <img onClick={incrementSum} src="/plus.svg" alt="plus" />
    </div>
  )
}

export default ProductCounter
