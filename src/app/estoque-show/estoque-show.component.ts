import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EstoqueService } from '../service/estoque.service';
import { Estoque } from "../../model/estoque";

@Component({
  selector: 'app-estoque-show',
  templateUrl: './estoque-show.component.html',
  styleUrls: ['./estoque-show.component.css']
})
export class EstoqueShowComponent implements OnInit {

  estoque: Estoque = { id: null, produto_nome: null, loja_nome: null, quantidade: null};
  isLoadingResults = true;

  constructor(private router: Router, private route: ActivatedRoute, private api: EstoqueService) { }

  ngOnInit() {
    this.getEstoque(this.route.snapshot.params['id']);
  }

  getEstoque(id) {
    this.api.showEstoque(id)
      .subscribe(res => {
        this.estoque = res.data;
        this.isLoadingResults = false;
      });
  }

  deleteEstoque(id) {
    this.isLoadingResults = true;
    this.api.deleteEstoque(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/estoque']);
        }, (err) => {
          this.isLoadingResults = false;
        }
      );
  }

}
