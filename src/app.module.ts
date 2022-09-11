import { EstablishmentEntity } from './establishment/establishment.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventEntity } from './event/event.entity';
import { EventModule } from './event/event.module';
import { ScheduleEntity } from './schedule/schedule.entity';
import { ScheduleModule } from './schedule/schedule.module';
import { QuestionModule } from './question/question.module';
import { ReviewModule } from './review/review.module';
import { UserModule } from './user/user.module';
import { PetModule } from './pet/pet.module';
import { EstablishmentModule } from './establishment/establishment.module';
import { ReviewEntity } from './review/review.entity';
import { UserEntity } from './user/user.entity';
import { QuestionEntity } from './question/question.entity';
import { PetEntity } from './pet/pet.entity';

@Module({
  imports: [
    EventModule,
    ScheduleModule,
    ReviewModule,
    UserModule,
    QuestionModule,
    PetModule,
    EstablishmentModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'pet-friendly',
      entities: [
        EventEntity,
        ScheduleEntity,
        ReviewEntity,
        UserEntity,
        QuestionEntity,
        PetEntity,
        EstablishmentEntity,
      ],
      dropSchema: true,
      synchronize: true,
      keepConnectionAlive: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
