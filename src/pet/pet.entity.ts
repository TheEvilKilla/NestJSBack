/* eslint-disable prettier/prettier */
import { UserEntity } from 'src/user/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PetEntity {
 @PrimaryGeneratedColumn('uuid')
 id: string;

 @Column()
 name: string;
 
 @Column()
 species: string;

 @Column()
 image: string;

 @ManyToOne(() => UserEntity, user => user.pets)
 user: UserEntity;

}
