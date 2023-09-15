import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import RealEstate from "./RealEstate.entities";

@Entity('categories')
export default class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 45, unique: true })
  name: string;

  @OneToMany(() => RealEstate, (realEstate) => realEstate.category)
  realEstate: RealEstate[];
}