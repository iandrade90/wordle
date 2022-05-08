import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuessedWords } from './guessedWords.entity';
import { Words } from './words.entity';
import { WordsController } from './controller/words.controller';
import { WordsService } from './service/words.service';

@Module({
  imports: [TypeOrmModule.forFeature([Words, GuessedWords])],
  controllers: [WordsController],
  providers: [WordsService],
})
export class WordsModule {}
