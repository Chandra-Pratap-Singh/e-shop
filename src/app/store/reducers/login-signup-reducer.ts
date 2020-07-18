import {initialState} from '../store'
import * as actionTypes from '../actions/action-types'

export const loginSignupReducer = (state = initialState, action) => {
switch(action.type){
    case actionTypes.LOGIN_SINGUP_DISPLAY :
        return {...state, loginSignupDisplay: action.payload}
    default :
        return state;
}
}
