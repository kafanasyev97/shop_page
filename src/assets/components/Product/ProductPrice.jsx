const ProductPrice = () => {
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
            <img src="/Toggle.svg" alt="toggle" />
            {/* <!-- FIX Сделать чекбокс вместо картинки -->
                      <!-- <div>Toggle</div> --> */}
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
        {/* <!-- <div className="product__info-amount-text">
                    <img src="./public/minus.svg" alt="minus" />
                    <p>24 штуки</p>
                    <img src="./public/plus.svg" alt="plus" />
                  </div> --> */}
        <button className="product__info-basket">
          <img src="/product-basket.svg" alt="product-basket" />
          <p>В корзину</p>
        </button>
        <button className="product__info-favorite">
          <img src="/favorite.svg" alt="favorite" />
        </button>
      </div>
    </div>
  )
}

export default ProductPrice
