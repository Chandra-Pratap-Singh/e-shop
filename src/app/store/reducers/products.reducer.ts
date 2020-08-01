import Iproduct from "src/app/modals/interfaces/product.interface";
import { State } from "@ngrx/store";
export interface IproductState {
  productCategories: string[];
  productItems: Iproduct[];
}

const initialState = {
  productCategories: ["category1", "category2"],
  productItems: [
    {
      img: "",
      name: "",
      price: 457,
      rating: 4,
      category: 'category1'
    },
    {
      img: "",
      name: "",
      price: 457,
      rating: 4,
      category: 'category1'
    },
    {
      img: "",
      name: "",
      price: 457,
      rating: 4,
      category: 'category1'
    },
    {
      img: "",
      name: "",
      price: 457,
      rating: 4,
      category: 'category1'
    },
    {
      img: "",
      name: "",
      price: 457,
      rating: 4,
      category: 'category2'
    },
    {
      img: "",
      name: "",
      price: 457,
      rating: 4,
      category: 'category2'
    },
    {
      img: "",
      name: "",
      price: 457,
      rating: 4,
      category: 'category2'
    },
    {
      img: "",
      name: "",
      price: 457,
      rating: 4,
      category: 'category2'
    },
  ],
};

export const productsReducer = (
  state: IproductState = initialState,
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
