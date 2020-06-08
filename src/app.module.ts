import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConnectionService } from './shared/services/database-connection.service';

@Module({
  imports: [PersonModule, 
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConnectionService
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
