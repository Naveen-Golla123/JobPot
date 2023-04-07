import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Jobs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false
  })
  link: string;
}
