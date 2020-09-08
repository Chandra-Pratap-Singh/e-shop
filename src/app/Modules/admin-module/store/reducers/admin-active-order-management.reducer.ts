import { IActiveOrder } from "../../modal/interfaces/active-order.interface";
import * as actionTypes from "../actions/actionTypes.action";

const initialState: IActiveOrder[] = [
  {
    customerName: "Chandra Pratap Singh",
    customerPhone: "123456789",
    customerAddress:
      "51/1/A/20 JMD App. Maistrate Bagan, Rabindra sarani, Liluah - Howrah, 711204",
    orderId: "1",
    date: "123456789789",
    status: "pending",
    items: [
      {
        productId: "1",
        itemName: "Tasty Dish",
        description: "2 x Bhature, 1 x chole",
        quantity: 1,
        price: 256,
      },
      {
        productId: "2",
        itemName: "Tasty Dish",
        description: "2 x Bhature, 1 x chole",
        quantity: 1,
        price: 215,
      },
    ],
  },
  {
    customerName: "Shubham Singh",
    customerPhone: "123456789",
    customerAddress:
      "51/1/A/20 JMD App. Maistrate Bagan, Rabindra sarani, Liluah - Howrah, 711204",
    orderId: "2",
    date: "123456789789",
    status: "accepted",
    items: [
      {
        productId: "1",
        itemName: "Tasty Dish",
        description: "2 x Bhature, 1 x chole",
        quantity: 1,
        price: 249,
      },
      {
        productId: "2",
        itemName: "Tasty Dish",
        description: "2 x Bhature, 1 x chole",
        quantity: 1,
        price: 249,
      },
    ],
  },
];

export const adminActiveOrderManagementReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case actionTypes.UPDATE_ORDER_STATUS: {
      return state.map((order) => {
        if (order.orderId === action.payload.orderId)
          return { ...order, status: action.payload.status };
        return order;
      });
    }
    default:
      return state;
  }
};
