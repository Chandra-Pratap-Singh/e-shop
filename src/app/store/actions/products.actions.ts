import * as actionTypes from './action-types';
import { Action } from '@ngrx/store';

export class AddToCart implements Action{
readonly type:string = actionTypes.ADD_TO_CART;
constructor(public payload:{productId:string, quantity:number}){}
}