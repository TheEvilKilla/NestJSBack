import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionModule } from './question/question.module';
import { ReviewModule } from './review/review.module';
import { UserModule } from './user/user.module';
import { PetModule } from './pet/pet.module';
@Module({
  imports: [QuestionModule, ReviewModule, UserModule, PetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
