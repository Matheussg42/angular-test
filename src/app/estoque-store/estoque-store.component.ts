import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { EstoqueService } from '../service/estoque.service';
import { ProdutoService } from '../service/produto.service';
import { LojaService } from '../service/loja.service';

@Component({
  selector: 'app-estoque-store',
  templateUrl: './estoque-store.component.html',
  styleUrls: ['./estoque-store.component.css']
})
export class EstoqueStoreComponent implements OnInit {

  id: number = null;
  productForm: FormGroup;
  quantidade: number = null;
  fk_id_produto: number = null
  fk_id_loja: number = null;
  produtoLista = [];
  lojaLista = [];
  isLoadingResults = false;

  constructor(private router: Router, private route: ActivatedRoute, private api: EstoqueService, private formBuilder: FormBuilder,private produtos: ProdutoService, private lojas: LojaService) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      fk_id_produto: new FormControl(null, Validators.required),
      fk_id_loja: new FormControl(null, Validators.required),
      quantidade: new FormControl(null, Validators.required)
    });
    this.getProdutos();
    this.getLojas();
  }

  getEstoque(id) {
    this.api.showEstoque(id).subscribe(res => {
      console.log(res.data.produto_nome);      
      this.id = res.data.id;
      this.productForm.controls['fk_id_produto'].setValue(res.data.produto_id)
      this.productForm.controls['fk_id_loja'].setValue(res.data.loja_id)
      this.productForm.controls['quantidade'].setValue(res.data.quantidade)
    });
  }

  getProdutos(){
    this.produtos.getProdutos().subscribe(res => {
      console.log(res);      
      this.produtoLista = res.data;
    });
  }

  getLojas(){
    this.lojas.getLojas().subscribe(res => {
      console.log(res);      
      this.lojaLista = res.data;
    });
  }

  storeEstoque(form: NgForm) {
    this.isLoadingResults = true;
    this.api.storeEstoque(form)
      .subscribe(res => {
        console.log('accept',res)
          const id = res.data.id;
          this.isLoadingResults = false;
          this.router.navigate(['/estoque-show', id]);
        }, (err) => {
          console.warn('error',err);
          this.isLoadingResults = false;
        });
  }
}
