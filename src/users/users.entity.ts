import { User } from 'src/globals/interfaces';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class Users implements User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'varchar', length: 15, nullable: false, unique: true })
  username?: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  password?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  token?: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt?: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt?: Date;
}
