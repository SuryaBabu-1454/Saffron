import { useCart } from "../context/CartContext";
import { FiPlus, FiMinus } from "react-icons/fi";

const CartPage = () => {
  const { cartItems, removeFromCart, increaseQty, decreaseQty } = useCart();

  // Convert ₹599 -> 599 when calculating
  const grandTotal = cartItems.reduce((total, item) => {
    const priceNum = Number(item.price.replace("₹", ""));
    return total + priceNum * item.quantity;
  }, 0);

  return (
    <div className="px-6 py-20 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-[#C47F00] mb-10">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        cartItems.map((item) => {
          const priceNum = Number(item.price.replace("₹", ""));

          return (
            <div
              key={item.id}
              className="flex items-center gap-6 p-5 bg-gray-100 rounded-xl shadow mb-5"
            >
              <img
                src={item.img}
                alt={item.name}
                className="h-24 w-24 object-cover rounded-lg"
              />

              <div className="flex-1">
                <h3 className="text-xl font-semibold">{item.name}</h3>

                {/* Item total */}
                <p className="text-[#C47F00] font-semibold">
                  ₹{priceNum * item.quantity}
                </p>

                {/* QUANTITY BUTTONS */}
                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="p-2 bg-white rounded-full shadow hover:bg-gray-200"
                  >
                    <FiMinus />
                  </button>

                  <span className="text-lg font-semibold w-10 text-center">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="p-2 bg-white rounded-full shadow hover:bg-gray-200"
                  >
                    <FiPlus />
                  </button>
                </div>
              </div>

              <button
                className="text-red-500 font-semibold"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          );
        })
      )}

      {/* GRAND TOTAL */}
      {cartItems.length > 0 && (
        <div className="mt-10 p-5 text-end bg-white shadow rounded-xl border flex gap-10 items-center justify-end">
          <hr className="h-1 w-50 bg-gray-800 w-3/4"/>
          <h3 className="text-2xl font-bold text-[#C47F00]">
            Total: ₹{grandTotal}
          </h3>
        </div>
      )}
    </div>
  );
};

export default CartPage;
