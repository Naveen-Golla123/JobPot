import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jobs } from '../Entities/Jobs.entity';
import { JobController } from './jobs.controller';
import { JobService } from './jobs.service';

@Module({
  imports: [TypeOrmModule.forFeature([Jobs])],
  providers: [JobService],
  exports: [],
  controllers:[JobController]
})
export class JobModule {}
