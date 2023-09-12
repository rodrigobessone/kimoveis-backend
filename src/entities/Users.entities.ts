import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";


@Entity("users")
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45 })
  name: string;

  @Column({ length: 45, unique: true })
  email: string;

  @Column({ default: false })
  admin: boolean;

  @Column({ default: true }) // Defina o valor padrão como ativo (true)
  active: boolean;

  @Column()
  password: string;

  @CreateDateColumn({ type: "date" })
  createdAt: Date | String;

  @UpdateDateColumn({ type: "date" })
  updatedAt: Date | String;

  @DeleteDateColumn({ type: "date", nullable: true })
  deletedAt: Date | String;
}