import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Words } from './words.entity';

@Entity('guesses')
export class GuessedWords {
  @PrimaryGeneratedColumn()
  id?: number;

  @OneToOne(() => Words)
  @JoinColumn()
  word?: Words;

  @Column({ type: 'int', nullable: false, unique: true })
  guesses?: number;
}
