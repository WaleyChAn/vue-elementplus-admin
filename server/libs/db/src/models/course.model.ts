import { ApiProperty } from '@nestjs/swagger';
import { modelOptions, prop } from '@typegoose/typegoose';
import { Episode } from './episode.model';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Course {
  @prop()
  @ApiProperty({ description: 'Course name' })
  name: string;

  @prop()
  @ApiProperty({ description: 'Course cover' })
  cover: string;

  @prop({ ref: () => 'Episode' })
  @ApiProperty({ description: 'Course episodes' })
  episodes: Episode[];
}
