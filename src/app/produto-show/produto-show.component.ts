import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../service/produto.service';
import { Produto } from "../../model/produto";

@Component({
  selector: 'app-produto-show',
  templateUrl: './produto-show.component.html',
  styleUrls: ['./produto-show.component.css']
})
export class ProdutoShowComponent implements OnInit {

  produto: Produto = { id: null, nome: '', unidade: ''};
  deleteProdutoErroForm: string = '';
  isLoadingResults = true;

  constructor(private router: Router, private route: ActivatedRoute, private api: ProdutoService) { }

  ngOnInit() {
    this.getProduto(this.route.snapshot.params['id']);
  }

  getProduto(id) {
    this.api.showProduto(id)
      .subscribe(res => {
        this.produto = res.data;
        this.isLoadingResults = false;
      });
  }

  deleteProduto(id) {
    this.isLoadingResults = true;
    this.api.deleteProduto(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/produto']);
        }, error => {
          this.deleteProdutoErroForm = error.error.error;
        });
  }

}
