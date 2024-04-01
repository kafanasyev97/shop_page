const Product = () => {
  return (
    <main className="main">
      <section className="section">
        <div className="title">
          <ul className="title__address">
            <li>
              <p>Каталог</p>
            </li>
            <li>
              <p>/</p>
            </li>
            <li>
              <p>Обувь</p>
            </li>
            <li>
              <p>/</p>
            </li>
            <li>
              <p>Кроссовки</p>
            </li>
            <li>
              <p>/</p>
            </li>
            <li>
              <p>Беговые</p>
            </li>
          </ul>
          <h2 className="title__name">Кроссовки мужские Skechers Sunny Dale</h2>
        </div>

        <div className="product">
          <div className="product__images">
            <div className="product__images-main">
              <img src="./public/main-img.jpg" alt="main" />
            </div>
            <div className="product__images-optional">
              <div className="product__images-arrow">
                <img src="./public/left-arrow.svg" alt="left-arrow" />
              </div>
              <div className="product__images-optional-images">
                <img src="./public/boots-2.jpg" alt="boots" />
                <img src="./public/boots-2.jpg" alt="boots" />
                <img src="./public/boots-2.jpg" alt="boots" />
                <img src="./public/boots-2.jpg" alt="boots" />
              </div>
              <div className="product__images-arrow">
                <img src="./public/right-arrow.svg" alt="right-arrow" />
              </div>
            </div>
          </div>

          <div className="product__info">
            <div className="product__info-main-info">
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
                      <img src="./public/Toggle.svg" alt="toggle" />
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
                    <img
                      src="./public/product-basket.svg"
                      alt="product-basket"
                    />
                    <p>В корзину</p>
                  </button>
                  <button className="product__info-favorite">
                    <img src="./public/favorite.svg" alt="favorite" />
                  </button>
                </div>
              </div>

              <div className="product__info-line"></div>

              <div className="product__info-properties">
                <h4 className="product__info-properties-text">
                  Характеристики
                </h4>
                <ul className="product__info-properties-props">
                  <li className="product__info-properties-block">
                    <div>
                      <h6>ELC00696</h6>
                      <p>Код поставщика</p>
                    </div>
                    <div>
                      <h6>ELC0200000696</h6>
                      <p>Артикул</p>
                    </div>
                  </li>
                  <li className="product__info-properties-block">
                    <div>
                      <h6>ELC0200000696</h6>
                      <p>Код РАЭК</p>
                    </div>
                    <div>
                      <h6>ELC00696</h6>
                      <p>Код ЕТМ</p>
                    </div>
                  </li>
                  <li className="product__info-properties-block">
                    <div>
                      <h6>Electric used</h6>
                      <p>Бренд</p>
                    </div>
                    <div>
                      <h6>ELC00696</h6>
                      <p>Серия</p>
                    </div>
                  </li>
                  <li className="product__info-properties-block">
                    <div className="last-child">
                      <h6>ELC0200000696</h6>
                      <p>Код производителя </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product__info-description">
              <h3>Описание товара</h3>
              <p>
                Создание приверженного покупателя специфицирует неопровержимый
                комплексный анализ ситуации. CTR существенно индуцирует из ряда
                вон выходящий SWOT-анализ. Воздействие на потребителя определяет
                возрастающий интеграл по поверхности, что известно даже
                школьникам. Отсюда естественно следует, что коммуникация
                уравновешивает косвенный фактор коммуникации. Поле направлений
                естественно допускает экспериментальный скачок функции, таким
                образом сбылась мечта идиота - утверждение полностью доказано.
                Арифметическая прогрессия притягивает линейно зависимый пул
                лояльных изданий.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Product
