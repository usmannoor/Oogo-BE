import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Car {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    nullable: false,
    type: 'int'
  })
  MakeId: number;

  @Column({
    unique: true,
    nullable: false,
    type: 'varchar',
    length: 80,
  })
  MakeName: string;

}
