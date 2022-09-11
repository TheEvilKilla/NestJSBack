import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ScheduleEntity } from '../schedule/schedule.entity';
import { EventEntity } from '../event/event.entity';
import { ReviewEntity } from '../review/review.entity';
import { QuestionEntity } from '../question/question.entity';

@Entity()
export class EstablishmentEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
    
    @Column()
    address: string;

    @Column()
    city: string;

    @Column()
    type: string;

    @OneToMany(() => ReviewEntity, review => review.establishment)
    reviews: ReviewEntity[];

    @OneToMany(() => QuestionEntity, question => question.establishment)
    questions: QuestionEntity[];

    @ManyToOne(() => ScheduleEntity, schedule => schedule.establishments)
    schedule: ScheduleEntity[];

    @ManyToMany(() => EventEntity, event => event.establishments)
    event: EventEntity[];
}
