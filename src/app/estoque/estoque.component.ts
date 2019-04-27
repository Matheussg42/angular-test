import { Component, OnInit } from '@angular/core';
import { EstoqueService } from '../service/estoque.service';
import { Estoque } from "../../model/estoque";

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {
  displayedColumns: string[] = [ 'produto_nome', 'loja_nome', 'quantidade', 'acao'];
  dataSource: Estoque[];
  isLoadingResults = true;
  constructor(private _api: EstoqueService) { }

  ngOnInit() {
    this._api.getEstoques()
    .subscribe(res => {
      this.dataSource = res.data;
      this.isLoadingResults = false;
    }, err => {
      this.isLoadingResults = false;
    });
  }

}
