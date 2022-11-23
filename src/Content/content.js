function Content({ name, image, price, children }) {
  return (
    <div className="contentBook">
      <img src={image} alt="" />
      <h3>{name}</h3>
      <p className="price">${price}</p>
      {children}
      <button>Buy</button>
    </div>
  )
}

export default Content
