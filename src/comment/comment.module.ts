import { Module } from "@nestjs/common";
import { CommentService } from "./comment.service";
import { CommentController } from "./comment.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Comment } from "./entities/comment.entity";
import { Card } from "src/card/entities/card.entity";
import { Dash } from "src/dash/entities/dash.entity";
import { CardService } from "src/card/card.service";
import { DashService } from "src/dash/dash.service";

@Module({
  imports: [TypeOrmModule.forFeature([Card, Comment, Dash])],
  controllers: [CommentController],
  providers: [CardService, CommentService, DashService],
})
export class CommentModule {}
