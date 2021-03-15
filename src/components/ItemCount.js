const ItemCount = ({ stock, initial, onAdd }) => {
    return (
      <form>
        Stock: {stock}
        <br />
        <input id="cantidad" type="number" placeholder={initial}></input>
        <br />
        <button onClick={ stock > 0 ? (e) => onAdd(e, 1) : (e) => e.preventDefault() }>Agregar al carrito</button>
      </form>
    );
  };

  export default ItemCount;