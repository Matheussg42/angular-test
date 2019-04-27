import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EstoqueService } from '../service/estoque.service';
import { Estoque } from "../../model/estoque";

@Component({
  selector: 'app-estoque-loja',
  templateUrl: './estoque-loja.component.html',
  styleUrls: ['./estoque-loja.component.css']
})
export class EstoqueLojaComponent implements OnInit {
  displayedColumns: string[] = [ 'produto_nome', 'loja_nome', 'quantidade', 'acao'];
  dataSource: Estoque[];
  isLoadingResults = true;

  constructor(private router: Router, private route: ActivatedRoute, private api: EstoqueService) { }

  ngOnInit() {
    this.getEstoqueLoja(this.route.snapshot.params['loja_id']);
  }

  getEstoqueLoja(id) {
    this.api.getEstoqueLoja(id)
    .subscribe(res => {
      this.dataSource = res.data;
      this.isLoadingResults = false;
    }, err => {
      this.isLoadingResults = false;
    });
  }
}
