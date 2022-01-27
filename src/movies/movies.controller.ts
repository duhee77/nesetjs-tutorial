import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'this will return movie list';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `this will return one movie with the id : ${movieId}`;
  }

  @Post()
  create() {
    return 'this will create a movie';
  }

  @Delete('/:id')
  delete(@Param('id') movieId: string) {
    return `this will delete a movie with the id : ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string) {
    return `this will patch a movie with the id : ${movieId}`;
  }
}
