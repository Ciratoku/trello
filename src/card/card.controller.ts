import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { CardService } from "./card.service";
import { CreateCardDto } from "./dto/create-card.dto";
import { UpdateCardDto } from "./dto/update-card.dto";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@Controller("cards")
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  create(@Body() createCardDto: CreateCardDto) {
    return this.cardService.create(createCardDto);
  }

  @Get(":id")
  @UseGuards(JwtAuthGuard)
  findOne(@Param("id") id: string) {
    return this.cardService.findOne(+id);
  }

  @Patch(":id")
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  update(@Param("id") id: string, @Body() updateCardDto: UpdateCardDto) {
    return this.cardService.update(+id, updateCardDto);
  }

  @Delete(":id")
  @UseGuards(JwtAuthGuard)
  remove(@Param("id") id: string) {
    return this.cardService.remove(+id);
  }
}
