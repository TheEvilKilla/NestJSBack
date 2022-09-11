/* eslint-disable prettier/prettier */
import { PetEntity } from 'src/pet/pet.entity';
import { ReviewEntity } from 'src/review/review.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

 @OneToMany(() => PetEntity, pet => pet.user)
   pets: PetEntity[];
 @OneToMany(() => QuestionEntity, question => question.user)
   questions: QuestionEntity[];
 @OneToMany(() => ReviewEntity, review => review.user)
   reviews: ReviewEntity[];


}
