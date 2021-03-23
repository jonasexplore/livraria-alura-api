import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Livro } from './livro.model';

@Injectable()
export class LivroService {
  constructor(
    @InjectRepository(Livro)
    private livroModel: typeof Livro,
  ) {}

  async obterTodos(): Promise<Livro[]> {
    return this.livroModel.find();
  }

  async obterUm(id: number): Promise<Livro> {
    return this.livroModel.findOne({ id: id });
  }

  criar(livro: Livro): void {
    this.livroModel.save(livro);
  }

  async alterar(livro: Livro): Promise<Livro> {
    this.livroModel.update(livro, {
      id: livro.id,
    });

    return livro;
  }

  async apagar(id: number) {
    const livro = await this.obterUm(id);
    livro && livro.remove();
  }
}
