import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { EstoqueService } from '../service/estoque.service';
import { ProdutoService } from '../service/produto.service';
import { LojaService } from '../service/loja.service';

@Component({
  selector: 'app-estoque-update',
  templateUrl: './estoque-update.component.html',
  styleUrls: ['./estoque-update.component.css']
})
export class EstoqueUpdateComponent implements OnInit {

  id: number = null;
  productForm: FormGroup;
  quantidade: number = null;
  fk_id_produto: number = null
  fk_id_loja: number = null;
  updateEstoqueErroForm: string = '';
  produtoLista = [];
  lojaLista = [];
  isLoadingResults = false;

  constructor(private router: Router, private route: ActivatedRoute, private api: EstoqueService, private formBuilder: FormBuilder,private produtos: ProdutoService, private lojas: LojaService) { }

  ngOnInit() {
    this.getEstoque(this.route.snapshot.params['id']);
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
      this.id = res.data.id;
      this.productForm.controls['fk_id_produto'].setValue(res.data.produto_id)
      this.productForm.controls['fk_id_loja'].setValue(res.data.loja_id)
      this.productForm.controls['quantidade'].setValue(res.data.quantidade)
    });
  }

  getProdutos(){
    this.produtos.getProdutos().subscribe(res => { 
      this.produtoLista = res.data;
    });
  }

  getLojas(){
    this.lojas.getLojas().subscribe(res => {  
      this.lojaLista = res.data;
    });
  }

  updateEstoque(form: NgForm) {
    this.isLoadingResults = true;
    this.api.updateEstoque(this.id, form)
      .subscribe(res => {
        this.updateEstoqueErroForm = '';
        this.isLoadingResults = false;
        this.router.navigate(['/estoque-show/' + this.id]);
      }, error => {
        this.updateEstoqueErroForm = error.error.error;
      });
  }
}
