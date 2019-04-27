import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { Produto } from "../../model/produto";

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  displayedColumns: string[] = [ 'nome', 'unidade', 'acao'];
  dataSource: Produto[];
  isLoadingResults = true;
  constructor(private _api: ProdutoService) { }

  ngOnInit() {
    this._api.getProdutos()
    .subscribe(res => {
      this.dataSource = res.data;
      this.isLoadingResults = false;
    }, err => {
      this.isLoadingResults = false;
    });
  }

}
