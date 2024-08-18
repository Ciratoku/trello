import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateCardDto } from "./dto/create-card.dto";
import { UpdateCardDto } from "./dto/update-card.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Card } from "./entities/card.entity";
import { Repository } from "typeorm";

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card) private readonly cardRepository: Repository<Card>
  ) {}

  // TODO: check if dash with given id exists
  async create(createCardDto: CreateCardDto) {
    const newCard = {
      title: createCardDto.title,
      description: createCardDto.description,
      dash: { id: createCardDto.dash.id },
    };
    return await this.cardRepository.save(newCard);
  }

  async findOne(id: number) {
    const card = await this.cardRepository.findOne({
      where: {
        id,
      },
      relations: {
        comments: true,
      },
    });
    if (!card) throw new NotFoundException({ message: "No such card" });
    return card;
  }

  async update(id: number, updateCardDto: UpdateCardDto) {
    const card = await this.cardRepository.findOne({
      where: {
        id,
      },
    });
    if (!card) throw new NotFoundException({ message: "No such card" });
    return await this.cardRepository.update(id, updateCardDto);
  }

  async remove(id: number) {
    const card = await this.cardRepository.findOne({
      where: {
        id,
      },
    });
    if (!card) throw new NotFoundException({ message: "No such card" });
    return await this.cardRepository.delete(id);
  }
}
