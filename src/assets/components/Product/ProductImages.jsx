const ProductImages = () => {
  return (
    <div className="product__images">
      <div className="product__images-main">
        <img src="/main-img.jpg" alt="main" />
      </div>
      <div className="product__images-optional">
        <div className="product__images-arrow">
          <img src="/left-arrow.svg" alt="left-arrow" />
        </div>
        <div className="product__images-optional-images">
          <img src="/boots-2.jpg" alt="boots" />
          <img src="/boots-3.jpg" alt="boots" />
          <img src="/boots-4.jpg" alt="boots" />
          <img src="/boots-5.jpg" alt="boots" />
        </div>
        <div className="product__images-arrow">
          <img src="/right-arrow.svg" alt="right-arrow" />
        </div>
      </div>
    </div>
  )
}

export default ProductImages
