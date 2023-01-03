import { Course } from '@libs/db/models/course.model';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@Crud({
  model: Course,
})
@Controller('courses')
@ApiTags('Course')
export class CoursesController {
  constructor(@InjectModel(Course) private readonly model) {}
}
