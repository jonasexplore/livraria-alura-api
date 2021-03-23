import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { Livro } from './livro.model';
import { LivroService } from './livros.service';

@Controller('livros')
export class LivrosController {
  constructor(private livrosService: LivroService) {}

  @Get()
  obterTodos(): Promise<Livro[]> {
    return this.livrosService.obterTodos();
  }

  @Get(':id')
  obterUm(@Param() params): Promise<Livro> {
    return this.livrosService.obterUm(params.id);
  }

  @Post()
  criar(@Body() livro: Livro): void {
    this.livrosService.criar(livro);
  }

  @Put()
  alterar(@Body() livro: Livro): Promise<Livro> {
    return this.livrosService.alterar(livro);
  }

  @Delete(':id')
  apagar(@Param() params): void {
    this.livrosService.apagar(params.id);
  }
}
