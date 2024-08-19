import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { CardService } from "src/card/card.service";
import { CommentService } from "src/comment/comment.service";
import { DashService } from "src/dash/dash.service";

@Injectable()
export class AuthorGuard implements CanActivate {
  constructor(
    private readonly cardService: CardService,
    private readonly dashService: DashService,
    private readonly commentService: CommentService
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { id } = request.params;
    const type = request.route.path.split("/")[2];
    let entity;
    switch (type) {
      case "dashes":
        entity = await this.dashService.findOne(id);
        break;
      case "cards":
        const card = await this.cardService.findOne(id);
        entity = await this.dashService.findOne(card.dash.id);
        break;
      case "comments":
        entity = await this.commentService.findOne(id);
        break;
    }
    const user = request.user;
    if (entity && user && user.id === entity.user.id) return true;
    return false;
  }
}
