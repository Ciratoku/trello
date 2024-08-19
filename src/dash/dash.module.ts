import { Module } from "@nestjs/common";
import { DashService } from "./dash.service";
import { DashController } from "./dash.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Dash } from "./entities/dash.entity";
import { Comment } from "src/comment/entities/comment.entity";
import { Card } from "src/card/entities/card.entity";
import { CommentService } from "src/comment/comment.service";
import { CardService } from "src/card/card.service";

@Module({
  imports: [TypeOrmModule.forFeature([Dash, Comment, Card])],
  controllers: [DashController],
  providers: [CardService, CommentService, DashService],
})
export class DashModule {}
