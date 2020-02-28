import {EntityRepository, Repository} from "typeorm";
import {Products} from "../entity/Product";

@EntityRepository(Products)
export class ProductsRepository extends Repository<Products> {

    findByName(description: string) {
        return this.findOne({ description});
    }

}