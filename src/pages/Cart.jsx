import { useEffect, useState } from "react";
import { clearCart, getProductsFromCart, removeItemFromCart } from "../services/api/cart";
import { purchaseItems } from "../services/api/purchase";
import { purchaseConfirmation } from "../services/alerts/swal";
import { fetchData } from "../services/utils/utils";
import ProductCard from "../components/ProductCard";
import Spinner from "../components/Spinner";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [finalPrice, setFinalPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData(getProductsFromCart, setCartProducts, setLoading, [], (products) => {
      const total = products.reduce((acc, product) => {
        return acc + (product.cartProduct.salePrice > 0 ? product.cartProduct.salePrice : product.cartProduct.price);
      }, 0);

      setFinalPrice(total);
    });
  }, []);

  const handleRemoveClick = async (id) => {
    try {
      await removeItemFromCart(id);
    } catch (err) {
      console.log(`Error Removing Item From Cart: ${err}`);
    }
  };

  const handleClearCartClick = async () => {
    try {
      await clearCart();
    } catch (err) {
      console.log(`Error Clearing Cart: ${err}`);
    }
  };

  const handlePurchaseClick = async () => {
    const result = await purchaseConfirmation();
    if (result.isConfirmed) {
      try {
        await purchaseItems(finalPrice, cartProducts.length);
      } catch (err) {
        console.log(`Error Purchasing Items: ${err}`);
      }
    }
  };

  return (
    <div className="d-flex flex-column align-items-center">
      {loading ? (
        <Spinner />
      ) : cartProducts.length > 0 ? (
        <>
          <h1>Products In Cart</h1>
          <div className="d-flex flex-wrap gap-2">
            {cartProducts.map((product) => (
              <div key={product.cartProduct.id}>
                <ProductCard item={product.cartProduct} />
                <button className="btn btn-danger col-12" onClick={() => handleRemoveClick(product.id)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
          <button className="btn btn-danger my-3" onClick={handleClearCartClick}>
            Clear Cart
          </button>
          <h2>Final Price: $ {finalPrice}</h2>
          <h2>Total Items: {cartProducts.length}</h2>
          <button className="btn btn-primary my-3" style={{ transform: "scale(1.25)" }} onClick={handlePurchaseClick}>
            Purchase
          </button>
        </>
      ) : (
        <h1>No Products In Cart</h1>
      )}
    </div>
  );
};

export default Cart;
