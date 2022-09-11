/* eslint-disable prettier/prettier */
import { EstablishmentEntity } from 'src/establishment/establishment.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class QuestionEntity {
   @PrimaryGeneratedColumn('uuid')
   id: string;

   @Column()
   description: string;

   @Column()
   date: Date;

   @ManyToOne(() => EstablishmentEntity, establishment => establishment.questions)
   establishment: EstablishmentEntity;

   @OneToMany(() => QuestionEntity, answer => answer.question)
   answers: QuestionEntity[];

   @ManyToOne(() => QuestionEntity, answer => answer.question)
   question: QuestionEntity;
}