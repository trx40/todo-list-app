import { IsString, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger/dist/decorators';
export class CreateTodoDto {
  @IsString()
  @ApiProperty({ type: String })
  title: string;

  @IsString()
  @ApiProperty({ type: String })
  content: string;

  @IsBoolean()
  @ApiProperty({ type: Boolean })
  f_done: boolean;
}

export default CreateTodoDto;
