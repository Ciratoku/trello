import { IsNotEmpty } from "class-validator";

export class CreateDashDto {
  @IsNotEmpty()
  title: string;
}
