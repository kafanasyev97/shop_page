import { useContext } from 'react'
import { SumContext } from '../../../App'

const BasketButton = () => {
  const { setIsCounter, setSum, setCount } = useContext(SumContext)

  const showCounter = () => {
    setIsCounter(true)
    setSum((state) => state + 2000)
    setCount((state) => state + 1)
  }

  return (
    <button onClick={showCounter} className="product__info-basket">
      <img src="/product-basket.svg" alt="product-basket" />
      <p>В корзину</p>
    </button>
  )
}

export default BasketButton
