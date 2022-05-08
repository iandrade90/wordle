import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  username: 'postgres',
  password: '', //Add conexion to postgres
  port: 5432,
  host: 'localhost',
  database: 'wordle',
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
};
