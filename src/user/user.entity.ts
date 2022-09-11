import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { QuestionEntity } from '../question/question.entity';
import { PetEntity } from '../pet/pet.entity';
import { ReviewEntity } from '../review/review.entity';

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
