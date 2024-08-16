import {
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";
import { Dash } from "src/dash/entities/dash.entity";
import { Comment } from "src/comment/entities/comment.entity";

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => Dash, (dash) => dash.cards)
  @JoinColumn({ name: "dash_id" })
  dash: Dash;

  @OneToMany(() => Comment, (comment) => comment.card)
  comments: Comment[];
}
