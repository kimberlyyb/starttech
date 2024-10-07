import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Produto } from '../models/produtos.models';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produtos-lista',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './produtos-lista.component.html',
  styleUrl: './produtos-lista.component.css'
})
export class ProdutosListaComponent implements OnInit{
produtos: Produto[] = []

constructor(private produtoService: ProdutoService) {}

ngOnInit(): void{
  this.produtos = this.produtoService.getProdutos();
}
deletarProduto(id:number): void{
  this.produtoService.deleteProduto(id);
  this.produtos = this.produtoService.getProdutos();
}

}
