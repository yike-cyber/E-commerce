import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import OrderComponent from "./dashbord/userDashboard/order/OrderComponent";
import PaypalImg from "../assets/icons/images/paypal_icon.png";
import ChapaImg from "../assets/icons/images/chapa_logo.jpg";
const Checkout = () => {
  const { orderId } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentGateway, setPaymentGetway] = useState("");

  useEffect(() => {
    fetchOrderDetails();
  }, [orderId]);

  const token = localStorage.getItem("access");

  const fetchOrderDetails = async () => {
    console.log("order id", orderId);
    try {
      const response = await fetch(`http://localhost:8000/orders/${orderId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Faild to fetch order details.");
      }
      const data = await response.json();
      setOrderDetails(data);
      console.log("data found", data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const calculateTotal = (price, quantity) => price * quantity;

  const handleSetPaymentMethod = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handlePaymentGetway = (e) => {
    setPaymentGetway(e.target.value);
  };

  if (!orderDetails) return <div>Loading...</div>;

  return (
    <div className="container m-auto mb-28">
      <h1 className="text-2xl font-serif font-bold text-gray-700 py-2">
        Checkout
      </h1>
      <div className=" flex flex-row min-w-full">
        <div className="w-1/2 px-2 py-2">
          <form>
            <input
              type="text"
              className="w-1/2 border border-gray-300 focus:bg-indigo-200 focus:border-indigo-500 rounded-sm py-2 px-2 placeholder-black"
              placeholder="Enter coupon"
            />
            <h1 className="text-xl my-2 text-gray-700">Billing Details</h1>
            <div className="flex flex-row gap-2 min-w-full">
              <input
                type="username"
                className="w-1/2 border border-gray-300 focus:bg-indigo-200 focus:border-indigo-500 rounded-sm py-2 px-2 placeholder-black"
                placeholder="your name."
              />
              <input
                type="phone_numberr"
                className="w-1/2 border border-gray-300 focus:bg-indigo-200 focus:border-indigo-500 rounded-sm py-2 px-2 placeholder-black"
                placeholder="your phone number."
              />
            </div>
            <input
              type="text"
              name="address"
              className="w-1/2 border border-gray-300 focus:bg-indigo-200 focus:border-indigo-500 rounded-sm py-2 px-2 placeholder-black"
              placeholder="Enter your address"
            />
          </form>
          <div className="mt-10 w-full shadow-md shadow-gray-400 rounded-md  text-gray-600  mb-4">
            <h2 className="text-xl ml-4 py-2"> Select Payment Method</h2>
            <div className="flex flex-row gap-2">
              <form className="flex flex-col gap-2 bg-gray-50 rounded-md shadow-red-400 px-2 mx-4 py-2 w-auto">
                <div>
                  <input
                    type="radio"
                    onChange={(e) => handleSetPaymentMethod(e)}
                    value="bank"
                    checked={paymentMethod === "bank"}
                    name="payment_method"
                    className="mx-2"
                  />
                  <label>Direct Bank Transfer</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="payment_method"
                    checked={paymentMethod === "cash"}
                    className="mx-2"
                    onChange={(e) => handleSetPaymentMethod(e)}
                    value="cash"
                  />
                  <label>Cash on Delivery</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="payment_method"
                    checked={paymentMethod === "online"}
                    className="mx-2"
                    onChange={(e) => handleSetPaymentMethod(e)}
                    value="online"
                  />
                  <label>Online Gateway</label>
                </div>
              </form>
              <div className="bg-gray-50">
                {paymentMethod === "cash" && (
                  <div>
                    <h2 className="text-gray-700">cash in delivery</h2>
                  </div>
                )}
                {paymentMethod === "bank" && <div using bank></div>}
                {paymentMethod === "online" && (
                  <div class="mt-6">
                    <h3 class="text-lg font-semibold mb-2">
                      Choose Payment paymentGateway
                    </h3>
                    <div class="flex flex-col items-center space-y-2 mb-4">
                      <div class="flex flex-row items-center space-x-2">
                        <input
                          type="radio"
                          id="chapa"
                          checked={paymentGateway === "chapa"}
                          onChange={handlePaymentGetway}
                          name="payment"
                          value="chapa"
                          class="form-radio text-blue-600 h-5 w-5"
                        />
                        <label for="chapa" class="text-gray-700">
                          Chapa
                        </label>
                        <img
                          src={ChapaImg}
                          alt="Chapa Logo"
                          className="h-8 rounded-sm"
                        />
                      </div>
                      <div class="flex items-center space-x-2">
                        <input
                          type="radio"
                          checked={paymentGateway === "paypal"}
                          onChange={handlePaymentGetway}
                          id="paypal"
                          name="payment"
                          value="paypal"
                          class="form-radio text-blue-600 h-5 w-5"
                        />
                        <label for="paypal" class="text-gray-700">
                          PayPal
                        </label>
                        <img
                          src={PaypalImg}
                          alt="PayPal Logo"
                          className="h-8 "
                        />
                      </div>
                      <div className="flex flex-row items-center space-x-4 justify-between">
                        <button className="mt-4 mb-4 bg-blue-600 text-white px-4 py-1 rounded hover:bg-green-600">
                          Pay Now
                        </button>
                        <button className="mt-4 mb-4 bg-green-600 text-white px-4 py-1 rounded hover:bg-blue-600">
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2  px-2 border border-gray-200 rounded-md shadow-md shadow-gray-600">
          <div className="flex flex-row items-center justify-between text-gray-600 py-2 px-2 text-lg font-semibold">
            <h1>Your Order</h1>
            <p>Total price:{orderDetails.total_price}</p>
          </div>
          <Link to={"/cart/"}>
            <button className="bg-green-500 py-2 px-2 text-white rounded-md ">
              Go Back to Cart
            </button>
          </Link>
          {orderDetails && (
            <div>
              <OrderComponent
                order={orderDetails}
                calculateTotal={calculateTotal}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
