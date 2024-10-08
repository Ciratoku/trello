import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Comment } from "./entities/comment.entity";

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>
  ) {}
  async create(createCommentDto: CreateCommentDto, id: number) {
    const newComm = {
      text: createCommentDto.text,
      user: { id },
      card: { id: createCommentDto.card.id },
    };
    return await this.commentRepository.save(newComm);
  }

  async findOne(id: number) {
    const comment = await this.commentRepository.findOne({
      where: { id },
      relations: { user: true, card: true },
    });
    if (!comment) throw new NotFoundException("No such comment");
    return comment;
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    return await this.commentRepository.update(id, updateCommentDto);
  }

  async remove(id: number) {
    return await this.commentRepository.delete(id);
  }
}
