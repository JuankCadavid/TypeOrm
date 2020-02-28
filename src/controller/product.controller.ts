import { Request, Response } from "express";
import { getRepository, getCustomRepository } from "typeorm";
import { Products } from "../entity/Product";
import { ProductsRepository } from "../repositories/product.repository";


class productsController {

    public async getProducts(req: Request, res: Response): Promise<Response> {

        const products = await getRepository(Products).find();
        return res.json(products);

    }

    public async getProduct(req: Request, res: Response): Promise<Response> {

        const id = req.params.id;

        const product = await getRepository(Products).findOne(id);
        return res.json(product);

    }

    public async getProductName(req: Request, res: Response): Promise<Response> {

       const productsRepository=getCustomRepository(ProductsRepository)
        const name = req.params.name;

        const product = await productsRepository.findByName(name);
        return res.json(product);

    }

    public async createProducts(req: Request, res: Response): Promise<Response> {

        const newUser = getRepository(Products).create(req.body);
        const result = await getRepository(Products).save(newUser);

        return res.json(result);

    }


    public async updateProduct(req: Request, res: Response): Promise<Response> {

        const id = req.params.id;

        const product = await getRepository(Products).findOne(id);

        if (product) {

            getRepository(Products).merge(product, req.body);
            const result = await getRepository(Products).save(product);
            return res.json(result);
        }

        return res.status(404).json({ msg: 'Not user found' });

    }


    public async deleteProduct(req: Request, res: Response): Promise<Response> {

        const result = await getRepository(Products).delete(req.params.id);

        return res.json(result);

    }

}


const productscontroller = new productsController();
export default productscontroller;
