import React, { useEffect, useState } from "react";
import { useCart } from "../contexts/cartContext";

const CartItem = ({ cartItem, calculateItemPrice }) => {
  const { removeCartItem, updateCartItem, clearCart } = useCart();
  const [quantity, setNewQuantity] = useState(cartItem.quantity);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    calculateItemPrice();
  }, [quantity, removeCartItem, clearCart, updateCartItem]);

  const subTotal = quantity * cartItem.product.price;

  const increaseQuantity = () => {
    setNewQuantity((prev) => prev + 1);
    setIsUpdated(true);
  };
  const decreaseQuantity = () => {
    setNewQuantity((prev) => (prev > 1 ? prev - 1 : prev));
    setIsUpdated(true);
  };

  return (
    <tr className="py-2  my-1 w-full text-center border border-gray">
      <td className="pl-4">
        <img
          src={cartItem?.product?.image}
          alt="prod-img"
          className="w-12 h-12 rounded"
        />
      </td>
      <td>{cartItem.product.title}</td>
      <td>${cartItem.product.price}</td>
      <td>
        <span
          className="bg-red-500 text-white px-1 py-0 my-1 mx-1 rounded-full shadow-sm hover:bg-green-500 hover:shadow-inner hover:cursor-pointer"
          onClick={decreaseQuantity}
        >
          -
        </span>
        {quantity}
        <span
          className="bg-green-500 text-white px-1 py-0 my-1 mx-1 rounded-full shadow-sm hover:bg-blue-500 hover:shadow-inner hover:cursor-pointer"
          onClick={increaseQuantity}
        >
          +
        </span>
      </td>
      <td>{subTotal} Birr </td>
      <td
        className={
          "hover:cursor-pointer text-md " +
          (isUpdated ? "text-red-500" : "text-green-500")
        }
        onClick={(e) => {
          isUpdated && updateCartItem(cartItem.id, quantity);
          isUpdated && setIsUpdated(false);
        }}
      >
        {isUpdated ? "update" : "updated"}
      </td>
      <td
        className="text-3xl hover:cursor-pointer"
        onClick={(e) => removeCartItem(cartItem.id)}
      >
        &times;
      </td>
    </tr>
  );
};

export default CartItem;
