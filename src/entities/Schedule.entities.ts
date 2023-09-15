import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from "typeorm";
import RealEstate from "./RealEstate.entities";
import User from "./Users.entities";

@Entity("schedules")
export default class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("date")
  date: Date;

  @Column("time")
  hour: string;

  @ManyToOne(() => RealEstate, (realEstates) => realEstates.schedules)
  realEstate: RealEstate;

  @ManyToOne(() => User, (users) => users.schedule)
  user: User;
}