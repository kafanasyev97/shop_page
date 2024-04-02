const ProductCounter = () => {
  return (
    <div className="product__info-counter">
      <img src="/minus.svg" alt="minus" />
      <input placeholder="24 штуки" type="text" />
      <img src="/plus.svg" alt="plus" />
    </div>
  )
}

export default ProductCounter
