import * as actionTypes from "../actions/actionTypes.action";
import { IProduct } from "src/app/admin-module/modal/interfaces/product.interface";

const initialState: IProduct[] = [
  {
    productName: "Tasty Dish",
    productId: "1",
    description: "2 x Bhature, 1 x Chhole",
    img: "",
    price: 457,
    category: ["catergory1"],
  },
  {
    productName: "Tasty Dish",
    productId: "2",
    description: "2 x Bhature, 1 x Chhole",
    img: "",
    price: 457,
    category: ["catergory1"],
  },
];

export const adminProductManagementReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_PRODUCT: {
      return state.map((product) => {
        if (product.productId === action.payload.productId)
          return { ...action.payload };
        return { ...product };
      });
    }
    default:
      return state;
  }
};
