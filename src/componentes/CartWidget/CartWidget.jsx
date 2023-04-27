import "./CartWidget.css"

const CartWidget = () => {

    const imgCarrito = "https://media.istockphoto.com/id/1128229893/es/vector/icono-de-carro-de-compras.jpg?s=612x612&w=0&k=20&c=1bfA1UWFFVrzFoUBP1Zdk6h9VEwXuPNSIavHpWTWe7o=";

  return (

    <div className="carrito">
      <img className="imgCarrito" src={imgCarrito} alt="carrito" />
      <strong>3</strong>
    </div>
  )
}

export default CartWidget
