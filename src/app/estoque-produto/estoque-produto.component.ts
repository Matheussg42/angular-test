import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EstoqueService } from '../service/estoque.service';
import { Estoque } from "../../model/estoque";

@Component({
  selector: 'app-estoque-produto',
  templateUrl: './estoque-produto.component.html',
  styleUrls: ['./estoque-produto.component.css']
})
export class EstoqueProdutoComponent implements OnInit {
  displayedColumns: string[] = [ 'produto_nome', 'loja_nome', 'quantidade', 'acao'];
  dataSource: Estoque[];
  isLoadingResults = true;

  constructor(private router: Router, private route: ActivatedRoute, private api: EstoqueService) { }

  ngOnInit() {
    this.getEstoqueProduto(this.route.snapshot.params['produto_id']);
  }

  getEstoqueProduto(id) {
    this.api.getEstoqueProduto(id)
    .subscribe(res => {
      this.dataSource = res.data;
      this.isLoadingResults = false;
    }, err => {
      this.isLoadingResults = false;
    });
  }
}
