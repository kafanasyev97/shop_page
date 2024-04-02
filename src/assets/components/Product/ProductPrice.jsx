import { useContext, useState } from 'react'
import BasketButton from './BasketButton'
import ProductCounter from './ProductCounter'
import { SumContext } from '../../../App'

const ProductPrice = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  const { isCounter } = useContext(SumContext)
  const setFavoriteImg = () => setIsFavorite(true)

  return (
    <div className="product__info-count">
      <div className="product__info-price">
        <div className="product__info-total-price">
          <p>166 534.00 цена без скидки</p>
          <div className="product__info-discount-price">
            <h1>122 566 ₽</h1>
            <div className="product__info-discount">
              <h5>-15%</h5>
            </div>
          </div>
        </div>

        <div className="product__info-package">
          <div className="product__info-amount-package">
            <h6>12 штук в уп.</h6>
          </div>
          <div className="product__info-order-package">
            <input
              className="product__checkbox-input"
              type="checkbox"
              id="toggle"
            />
            <label htmlFor="toggle" className="product__checkbox-label"></label>
            <p>Заказ упаковкой</p>
          </div>
        </div>
      </div>

      <div className="product__info-count-line"></div>

      <div className="product__info-delivery">
        <div className="product__info-delivery-item">
          <h6>Завтра</h6>
          <p>Доставка</p>
        </div>
        <div className="product__info-delivery-item">
          <h6>7 шт.</h6>
          <p>Тарасовка</p>
        </div>
        <div className="product__info-delivery-item">
          <h6>7 шт.</h6>
          <p>Тарасовка</p>
        </div>
      </div>

      <div className="product__info-amount">
        {isCounter ? <ProductCounter /> : <BasketButton />}
        <button onClick={setFavoriteImg} className="product__info-favorite">
          {isFavorite ? (
            <img src="/red-heart.svg" alt="favorite" />
          ) : (
            <img src="/favorite.svg" alt="favorite" />
          )}
        </button>
      </div>
    </div>
  )
}

export default ProductPrice
