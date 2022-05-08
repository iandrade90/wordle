import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { WordsService } from '../service/words.service';

@Controller('words')
export class WordsController {
  constructor(private wordsService: WordsService) {}

  // @UseGuards(AuthenticatedGuard)
  @Get()
  getOneWord() {
    return this.wordsService.getWord();
  }

  @Post('answer')
  userAnswer(@Body() answer: string) {
    return this.wordsService.getWordByUser(answer);
  }
}
