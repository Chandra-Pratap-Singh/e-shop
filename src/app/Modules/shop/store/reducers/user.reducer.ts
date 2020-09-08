import * as actionTypes from "../actions/action-types";
import {IUser} from "src/app/modals/interfaces/user.interface";

const initialState: IUser = {
  name: "chandra",
  userId: "1",
  phone: "123456789",
  addresses: [
    {
      name: "Home",
      addressId: "1",
      address: `51/1/A/20 Jai Mata Di Apartment, 2nd Floor
            Majistrate Bagan, Rabindra Sarani,
            Liluah - Howrah, 711204`,
      active: true,
    },
    {
      name: "Home",
      addressId: "2",
      address: `51/1/A/20 Jai Mata Di Apartment, 2nd Floor
            Majistrate Bagan, Rabindra Sarani,
            Liluah - Howrah, 711204`,
      active: false,
    },
    {
      name: "Home",
      addressId: "3",
      address: `51/1/A/20 Jai Mata Di Apartment, 2nd Floor
            Majistrate Bagan, Rabindra Sarani,
            Liluah - Howrah, 711204`,
      active: false,
    },
  ],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_ACTIVE_ADDRESS: {
      const addresses = [...state.addresses];
      for (var i = 0; i < addresses.length; i++) {
        if (addresses[i].addressId === action.payload)
          addresses[i] = { ...addresses[i], active: true };
        else addresses[i] = { ...addresses[i], active: false };
      }
      return { ...state, addresses: [...addresses] };
    }
    default:
      return state;
  }
};
