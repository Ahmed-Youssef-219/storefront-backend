export type User = {
    id: number;
    firstName: string;
    lastName: string;
    password: string;
};

export type Product = {
    id: number;
    name: string;
    price: string;
};

export type Order = {
    id: number;
    status: string;
    user_id: number;
};

export type Order_products = {
    id: number;
    quantity: number;
    order_id: number;
    product_id: number;
};
