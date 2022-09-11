/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
 @PrimaryGeneratedColumn('uuid')
 id: string;

 @Column()
 name: string;
 
 @Column()
 login: string;
 
 @Column()
 password: string;
 
 @Column()
 city: string;

 @Column()
 image: string;


}
