import { Iorder } from "src/app/modals/interfaces/order.interface";
import { Action } from "@ngrx/store";

export interface IordersState {
  orderId: string;
  date: number;
  status: string;
  orderItems: Iorder[];
}

const initialState: IordersState[] = [
  {
    orderId: "1",
    date: 12345678910,
    status: "delivered",
    orderItems: [
      {
        productName: "TastyDish",
        price: 456,
        img:
          "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg",
        description: "2 x bhature + 1 plate chole",
        quantity: 4,
        ratingGiven: false,
        rating: 3,
      },
      {
        productName: "TastyDish",
        price: 456,
        img:
          "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg",
        description: "2 x bhature + 1 plate chole",
        quantity: 4,
        ratingGiven: false,
        rating: 3,
      },
      {
        productName: "TastyDish",
        price: 456,
        img:
          "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg",
        description: "2 x bhature + 1 plate chole",
        quantity: 4,
        ratingGiven: false,
        rating: 3,
      },
      {
        productName: "TastyDish",
        price: 456,
        img:
          "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg",
        description: "2 x bhature + 1 plate chole",
        quantity: 4,
        ratingGiven: false,
        rating: 3,
      },
    ],
  },
  {
    orderId: "2",
    date: 12345,
    status: "delivered",
    orderItems: [
      {
        productName: "TastyDish",
        price: 456,
        img:
          "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg",
        description: "2 x bhature + 1 plate chole",
        quantity: 4,
        ratingGiven: false,
        rating: 3,
      },
      {
        productName: "TastyDish",
        price: 456,
        img:
          "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg",
        description: "2 x bhature + 1 plate chole",
        quantity: 4,
        ratingGiven: false,
        rating: 3,
      },
      {
        productName: "TastyDish",
        price: 456,
        img:
          "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg",
        description: "2 x bhature + 1 plate chole",
        quantity: 4,
        ratingGiven: false,
        rating: 3,
      },
      {
        productName: "TastyDish",
        price: 456,
        img:
          "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg",
        description: "2 x bhature + 1 plate chole",
        quantity: 4,
        ratingGiven: false,
        rating: 3,
      },
    ],
  },
];

export const orderReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
