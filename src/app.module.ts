import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReviewModule } from './review/review.module';
import { UserModule } from './user/user.module';
import { PetModule } from './pet/pet.module';

@Module({
  imports: [ReviewModule, UserModule, PetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
