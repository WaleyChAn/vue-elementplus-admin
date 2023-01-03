import { ApiProperty } from '@nestjs/swagger';
import { modelOptions, prop } from '@typegoose/typegoose';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class User {
  @prop()
  @ApiProperty({ description: 'User name' })
  username: string;

  @prop()
  @ApiProperty({ description: 'Password' })
  password: string;
}
