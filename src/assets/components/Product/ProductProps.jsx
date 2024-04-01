const ProductProps = () => {
  return (
    <div className="product__info-properties">
      <h4 className="product__info-properties-text">Характеристики</h4>
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
  )
}

export default ProductProps
