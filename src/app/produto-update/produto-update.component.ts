import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto-update',
  templateUrl: './produto-update.component.html',
  styleUrls: ['./produto-update.component.css']
})
export class ProdutoUpdateComponent implements OnInit {

  id: number = null;
  productForm: FormGroup;
  updateProdutoErroForm: string = '';
  nome: String = '';
  unidade: String = '';
  isLoadingResults = false;

  constructor(private router: Router, private route: ActivatedRoute, private api: ProdutoService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getProduto(this.route.snapshot.params['id']);
    this.productForm = this.formBuilder.group({
    'nome' : [null, Validators.required],
    'unidade' : [null, Validators.required],
    })
  }

  getProduto(id) {
    this.api.showProduto(id).subscribe(res => {
      this.id = res.data.id;
      this.productForm.setValue({
        'nome': res.data.nome,
        'unidade': res.data.unidade,
      });
    });
  }

  updateProduto(form: NgForm) {
    this.isLoadingResults = true;
    this.api.updateProduto(this.id, form)
      .subscribe(res => {
          this.updateProdutoErroForm = '';
          this.isLoadingResults = false;
          this.router.navigate(['/produto-show/' + this.id]);
        }, error => {
          this.updateProdutoErroForm = error.error.error;
        });
  }
}
