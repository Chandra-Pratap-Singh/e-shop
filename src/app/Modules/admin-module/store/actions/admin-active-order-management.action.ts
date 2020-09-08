import * as actionTypes from './actionTypes.action';
import { Action } from '@ngrx/store';

export class UpdateOrderStatus implements Action{
    readonly type:string = actionTypes.UPDATE_ORDER_STATUS;
    constructor(public payload:{orderId:string, status: string}){}
} 