import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Dash } from "src/dash/entities/dash.entity";
import { Comment } from "src/comment/entities/comment.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  password: string;
  @OneToMany(() => Dash, (dash) => dash.user, { onDelete: "CASCADE" })
  dashes: Dash[];
  @OneToMany(() => Comment, (comment) => comment.user, { onDelete: "CASCADE" })
  comments: Comment[];
}
