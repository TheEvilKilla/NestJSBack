import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EstablishmentEntity } from '../establishment/establishment.entity';
import { UserEntity } from '../user/user.entity';

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

   @ManyToOne(() => UserEntity, user => user.questions)
   user: UserEntity
}