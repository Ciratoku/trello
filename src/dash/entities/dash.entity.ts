import { Card } from "src/card/entities/card.entity";
import { User } from "src/user/entities/user.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Dash {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @ManyToOne(() => User, (user) => user.dashes)
  @JoinColumn({ name: "user_id" })
  user: User;
  @OneToMany(() => Card, (card) => card.dash)
  cards: Card[];
}
