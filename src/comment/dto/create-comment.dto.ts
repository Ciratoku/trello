import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Card } from "src/card/entities/card.entity";
import { User } from "src/user/entities/user.entity";

export class CreateCommentDto {
  @ApiProperty()
  @IsNotEmpty()
  text: string;

  @ApiProperty()
  @IsNotEmpty()
  card: Card;
}
