import { Module } from "@nestjs/common";
import { CardService } from "./card.service";
import { CardController } from "./card.controller";
import { Card } from "./entities/card.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Comment } from "src/comment/entities/comment.entity";
import { Dash } from "src/dash/entities/dash.entity";
import { CommentService } from "src/comment/comment.service";
import { DashService } from "src/dash/dash.service";

@Module({
  imports: [TypeOrmModule.forFeature([Card, Comment, Dash])],
  controllers: [CardController],
  providers: [CardService, CommentService, DashService],
})
export class CardModule {}
