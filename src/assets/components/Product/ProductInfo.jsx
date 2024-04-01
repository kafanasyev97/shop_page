import ProductDescription from './ProductDescription'
import ProductMainInfo from './ProductMainInfo'

const ProductInfo = () => {
  return (
    <div className="product__info">
      <ProductMainInfo />
      <ProductDescription />
    </div>
  )
}

export default ProductInfo
