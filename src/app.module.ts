import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventEntity } from './event/event.entity';
import { EventModule } from './event/event.module';
import { ScheduleEntity } from './schedule/schedule.entity';
import { ScheduleModule } from './schedule/schedule.module';

@Module({
  imports: [EventModule, ScheduleModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'pet-friendly',
      entities: [EventEntity, ScheduleEntity],
      dropSchema: true,
      synchronize: true,
      keepConnectionAlive: true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
