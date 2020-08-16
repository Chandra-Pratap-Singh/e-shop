import { IActiveOrderItem } from './active-order-item.interface';

export interface IActiveOrder {
    customerName: string,
    customerPhone: string,
    customerAddress: string,
    orderId: string,
    date: string,
    status: string,
    items: IActiveOrderItem[]
}
