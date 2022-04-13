/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Livro } from './livro.model';
import { LivrosService } from './livros.service';
@Controller('livros')
export class LivrosConstroller {
  
  constructor(private livrosService: LivrosService) {}

  @Get()
  async obterTodos(): Promise<Livro[]> {
    return await this.livrosService.obterTodos();
  }

  @Get(':id')
  async obterUm(@Param() params): Promise<Livro> {
    return await this.livrosService.obterUm(params.id)
  }

  @Post()
  async criar(@Body() livro: Livro): Promise<Livro> {
    return await this.livrosService.criar(livro)
     
  }

  @Put()
  async alterar(@Body() livro: Livro): Promise<string> {
    await this.livrosService.alterar(livro)
    return `alteração do livro ${livro.id} ok`
  }
  
  @Delete(':id')
  async deletar(@Param() params): Promise<string> {
    await this.livrosService.deletar(params.id)
    return `exclusão do livro ${params.id} ok`
  }
}
