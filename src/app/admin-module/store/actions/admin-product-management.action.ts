import { Action } from '@ngrx/store';
import * as actionTypes from './actionTypes.action'
import { IProduct } from '../../modal/interfaces/product.interface';

export class UpdateProduct implements Action {
    readonly type: string = actionTypes.UPDATE_PRODUCT;
    constructor(public payload:IProduct){}
}