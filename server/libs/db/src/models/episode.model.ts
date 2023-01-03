import { ApiProperty } from '@nestjs/swagger';
import { modelOptions, prop } from '@typegoose/typegoose';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Episode {
  @prop()
  @ApiProperty({ description: 'Episode name' })
  name: string;

  @prop()
  @ApiProperty({ description: 'Episode file' })
  file: string;
}
