export type User = {
    id?: number;
    firstname: string;
    lastname: string;
    password: string;
};

export type Product = {
    id?: number;
    name: string;
    price: number;
};

export type Order = {
    id?: number;
    status: string;
    user_id?: number;
};

export type Order_products = {
    id?: number;
    quantity: number;
    order_id?: number;
    product_id: number;
};
