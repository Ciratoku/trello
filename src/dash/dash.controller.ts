import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { DashService } from "./dash.service";
import { CreateDashDto } from "./dto/create-dash.dto";
import { UpdateDashDto } from "./dto/update-dash.dto";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@Controller("dash")
export class DashController {
  constructor(private readonly dashService: DashService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  create(@Body() createDashDto: CreateDashDto, @Req() req) {
    return this.dashService.create(createDashDto, +req.user.id);
  }

  @Get()
  findAll() {
    return this.dashService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.dashService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateDashDto: UpdateDashDto) {
    return this.dashService.update(+id, updateDashDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.dashService.remove(+id);
  }
}
