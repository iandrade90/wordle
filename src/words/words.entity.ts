import { Word } from 'src/globals/interfaces';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('words')
export class Words implements Word {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'varchar', length: 5, nullable: false, unique: true })
  word?: string;
}
