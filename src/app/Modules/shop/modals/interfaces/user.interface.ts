export interface IUser {
  name: string;
  userId: string;
  phone: string;
  addresses: IAddress[];
}

export interface IAddress {
  name: string;
  addressId: string;
  address: string;
  active: boolean;
}
