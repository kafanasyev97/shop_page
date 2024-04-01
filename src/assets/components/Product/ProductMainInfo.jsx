import ProductPrice from './ProductPrice'
import ProductProps from './ProductProps'

const ProductMainInfo = () => {
  return (
    <div className="product__info-main-info">
      <ProductPrice />
      <div className="product__info-line"></div>
      <ProductProps />
    </div>
  )
}

export default ProductMainInfo
