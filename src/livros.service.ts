/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Livro } from './livro.model';

@Injectable()
export class LivrosService {
  constructor(
    @InjectModel(Livro)
    private livroModel: typeof Livro
  ) {}

  async obterTodos(): Promise<Livro[]> {
    return await this.livroModel.findAll()
  }

  async obterUm(id): Promise<Livro> {
    return await this.livroModel.findByPk(id)
  }

  async criar(livro: Livro): Promise<Livro> {
    return await this.livroModel.create(livro)
  }

  async alterar(livro: Livro): Promise<Livro> {
    await this.livroModel.update(livro, {
      where: {
        id: livro.id
      }
    })
    return await this.livroModel.findByPk(livro.id)
  }

  async deletar(id): Promise<string> {
    const livro = await this.livroModel.findByPk(id)
    if(livro) livro.destroy()
    return `exclusão do livro ${id} ok`
  }
}
