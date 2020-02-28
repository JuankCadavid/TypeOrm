import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Products {

    @PrimaryColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    quantity: number;

    @Column()
    image: string;

}