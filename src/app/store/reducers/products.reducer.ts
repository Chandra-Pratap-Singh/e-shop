import Iproduct from "src/app/modals/interfaces/product.interface";
import * as actionTypes from '../actions/action-types'
import { State } from "@ngrx/store";
export interface IproductState {
  productCategories: string[];
  productItems: Iproduct[];
}

const initialState = {
  productCategories: ["category1", "category2"],
  productItems: [
    {
      img: "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg",
      name: "Tasty Dish",
      price: 457,
      rating: 4,
      ratingProvider: 120,
      description: '250gm Curry',
      category: 'category1',
      presentInCart: 1,
      productId: '1'
    },
    {
      img: "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg",
      name: "Tasty Dish",
      price: 457,
      rating: 4,
      ratingProvider: 120,
      description: '250gm Curry',
      category: 'category1',
      presentInCart:0,
      productId: '2'
    },
    {
      img: "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg",
      name: "Tasty Dish",
      price: 457,
      rating: 4,
      ratingProvider: 120,
      description: '250gm Curry',
      category: 'category1',
      presentInCart:0,
      productId: '3'
    },
    {
      img: "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg",
      name: "Tasty Dish",
      price: 457,
      rating: 4,
      ratingProvider: 120,
      description: '250gm Curry',
      category: 'category1',
      presentInCart:0,
      productId: '4'
    },
    {
      img: "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg",
      name: "Tasty Dish2",
      price: 457,
      rating: 4,
      ratingProvider: 120,
      description: '250gm Curry',
      category: 'category2',
      presentInCart:0,
      productId: '5'
    },
    {
      img: "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg",
      name: "Tasty Dish2",
      price: 457,
      rating: 4,
      ratingProvider: 120,
      description: '250gm Curry',
      category: 'category2',
      presentInCart:0,
      productId: '6'
    },
    {
      img: "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg",
      name: "Tasty Dish2",
      price: 457,
      rating: 4,
      ratingProvider: 120,
      description: '250gm Curry',
      category: 'category2',
      presentInCart:0,
      productId: '7'
    },
    {
      img: "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg",
      name: "Tasty Dish2",
      price: 457,
      rating: 4,
      ratingProvider: 120,
      description: '250gm Curry',
      category: 'category2',
      presentInCart:0,
      productId: '8'
    },
  ],
};

export const productsReducer = (
  state: IproductState = initialState,
  action
) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      const updatedProductItems = state.productItems.map(product => {
          if(product.productId === action.payload.productId){
            return {...product,presentInCart:action.payload.quantity}
          }
          return product;
      })
      return {...state, productItems: [...updatedProductItems]}
      
    }
    default:
      return state;
  }
};
