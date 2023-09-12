import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
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

  @ManyToOne(() => RealEstate)
  @JoinColumn()
  realEstateId: number;

  @ManyToOne(() => User)
  @JoinColumn()
  userId: number;
}