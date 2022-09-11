import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ReviewEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    rete: string;

    @Column()
    description: string;

    @Column()
    date: Date;

}

