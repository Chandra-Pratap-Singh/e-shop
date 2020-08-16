import * as actionTypes from './action-types';
import { Action } from '@ngrx/store';

export class UpdateActiveAddress implements Action{
    readonly type:string = actionTypes.UPDATE_ACTIVE_ADDRESS;
    constructor(public payload:string) {}
}