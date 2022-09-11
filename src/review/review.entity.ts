import { EstablishmentEntity } from "src/establishment/establishment.entity";
import { UserEntity } from "src/user/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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


    @ManyToOne(() => UserEntity, user => user.reviews)
    user: UserEntity;

    @ManyToOne(() => EstablishmentEntity, establisment => establisment.reviews)
    establishment: EstablishmentEntity;

}

