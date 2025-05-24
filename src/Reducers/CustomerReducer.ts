// utils/customerReducer.ts (or inline above your component)
import type { Customer } from "../types/Customer.ts";

export type CustomerAction =
    | { type: "ADD"; payload: Customer }
    | { type: "UPDATE"; payload: Customer }
    | { type: "DELETE"; payload: number };

export function customerReducer(state: Customer[], action: CustomerAction): Customer[] {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload];
        case "UPDATE":
            return state.map((customer) =>
                customer.id === action.payload.id ? action.payload : customer
            );
        case "DELETE":
            return state.filter((customer) => customer.id !== action.payload);
        default:
            return state;
    }
}
