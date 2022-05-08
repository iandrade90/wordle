import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Words } from '../words.entity';

@Injectable()
export class WordsService {
  data = {};

  constructor(
    @InjectRepository(Words) private readonly words: Repository<Words>,
  ) {}

  normalizeString(str: string) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  async getWord() {
    const response = await this.words
      .createQueryBuilder()
      .orderBy('RANDOM()')
      .getOne();
    this.data = { id: response.id, word: this.normalizeString(response.word) };
    return this.data;
  }

  async getWordByUser(word: string) {
    if (word['answer'].length < 5) {
      return { message: 'The word is too short' };
    }

    const gameSuccess = [];

    for (let index = 0; index < word['answer'].length; index++) {
      if (word['answer'][index] === this.data['word'][index]) {
        gameSuccess.push(index);
      }
    }

    if (gameSuccess.length === 5) {
      return { message: 'You have all the words correct' };
    }
    return {};
  }
}
