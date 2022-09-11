/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class QuestionsEntity {
 @PrimaryGeneratedColumn('uuid')
 id: string; 

 @Column()
 description: string;
 
 @Column()
 date: Date; 
}