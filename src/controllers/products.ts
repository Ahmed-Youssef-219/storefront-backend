import { Request, Response } from 'express';
import ProductSchema from '../models/products';

const Product = new ProductSchema();
/* --------------------------------------------------------- get all products --------------------------------------------------- */
export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.index();
        res.status(200).json(products);
    } catch (error) {
        throw new Error(
            `can not get the products (from the controllers) ==> ${error}`
        );
    }
};
/* --------------------------------------------------------- get one product --------------------------------------------------- */
export const getOneProduct = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as unknown as number;
        const product = await Product.show(id);
        res.status(200).json(product);
    } catch (error) {
        throw new Error(
            `can not get the product (from the controllers) ==> ${error}`
        );
    }
};

/* --------------------------------------------------------- create a product --------------------------------------------------- */
export const createProduct = async (req: Request, res: Response) => {
    try {
        const productObj = req.body;
        const createdProduct = await Product.create(productObj);
        res.json({ createdProduct });
    } catch (error) {
        throw new Error(
            `can not create the product (from the controllers) ==> ${error}`
        );
    }
};

/* --------------------------------------------------------- delete a product --------------------------------------------------- */
export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as unknown as number;
        const deletedProduct = await Product.delete(id);
        res.json({ deletedProduct });
    } catch (error) {
        throw new Error(
            `can not delete the product (from the controllers) ==> ${error}`
        );
    }
};
