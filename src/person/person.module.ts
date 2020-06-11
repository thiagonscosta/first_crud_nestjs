import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './person.entity';
import { PersonGateway } from './person.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Person])],
  providers: [PersonService, PersonGateway],
  controllers: [PersonController]
})
export class PersonModule {}
