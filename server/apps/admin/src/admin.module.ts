import { Module } from '@nestjs/common';
import { DbModule } from 'libs/db/src';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { EpisodesModule } from './episodes/episodes.module';

@Module({
  imports: [DbModule, UsersModule, CoursesModule, EpisodesModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
