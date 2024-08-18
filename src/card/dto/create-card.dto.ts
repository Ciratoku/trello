import { IsNotEmpty } from "class-validator";
import { Dash } from "src/dash/entities/dash.entity";

export class CreateCardDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  dash: Dash;
}
