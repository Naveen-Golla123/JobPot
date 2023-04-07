import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { JobModule } from './Jobs/jobs.module';
import { Jobs } from './Entities/jobs.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "postgres",
      "host": "baasu.db.elephantsql.com",
      // "port": 5433,
      username: 'pbomcruv',
      password: '6YqMz3n1BfiIZCnaFBTyXiURB6OQCGp9',
      database: 'pbomcruv',
      "synchronize": true,
      "logging": false,
      "entities": [
        Jobs
      ]
    }), 
    JobModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
