import { Injectable } from "@nestjs/common";
import { CreateDashDto } from "./dto/create-dash.dto";
import { UpdateDashDto } from "./dto/update-dash.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Dash } from "./entities/dash.entity";
import { Repository } from "typeorm";

@Injectable()
export class DashService {
  constructor(
    @InjectRepository(Dash) private readonly dashRepository: Repository<Dash>
  ) {}
  async create(createDashDto: CreateDashDto, id: number) {
    const newDash = {
      title: createDashDto.title,
      user: { id },
    };
    return await this.dashRepository.save(newDash);
  }

  findAll() {
    return `This action returns all dash`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dash`;
  }

  update(id: number, updateDashDto: UpdateDashDto) {
    return `This action updates a #${id} dash`;
  }

  remove(id: number) {
    return `This action removes a #${id} dash`;
  }
}
