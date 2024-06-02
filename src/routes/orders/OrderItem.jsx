import React from "react";
import Styles from "./OrderItem.module.css";

const OrderItem = ({ order, deleteOrder }) => {
  return (
    <tr className={Styles.orderItem}>
      <td>{order._id}</td>

      <td>
        {order.products.map((item) => (
          <div key={item._id} className={Styles.productItem}>
            <img
              src={item.product.image}
              alt={item.product.caption}
              className={Styles.productImage}
            />
          </div>
        ))}
      </td>
      <td>
        {order.products.map((item) => (
          <div key={item._id} className={Styles.productItem}>
            <h4>{item.product.caption}</h4>
          </div>
        ))}
      </td>
      <td>
        {order.products.map((item) => (
          <div key={item._id} className={Styles.productItem}>
            <h4>{item.quantity}</h4>
          </div>
        ))}
      </td>
      <td>₹{order.totalMoney}</td>
      <td>{order.status}</td>
      <td>{order.paymentStatus}</td>
      <td>
        <button onClick={() => deleteOrder(order._id)}>Cancel</button>
      </td>
    </tr>
  );
};

export default OrderItem;
