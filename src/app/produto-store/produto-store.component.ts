import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto-store',
  templateUrl: './produto-store.component.html',
  styleUrls: ['./produto-store.component.css']
})
export class ProdutoStoreComponent implements OnInit {

  productForm: FormGroup;
  storeProdutoErroForm: string = '';
  isLoadingResults = false;

  constructor(private router: Router, private api: ProdutoService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      'nome' : [null, Validators.required],
      'unidade' : [null, [Validators.required, Validators.maxLength(2)]],
    });
  }

  storeProduto(form: NgForm) {
    this.isLoadingResults = true;
    this.api.storeProduto(form)
      .subscribe(res => {
          this.storeProdutoErroForm = '';
          const id = res.data.id;
          this.isLoadingResults = false;
          this.router.navigate(['/produto-show', id]);
        }, error => {
          this.storeProdutoErroForm = error.error.error;
        });
  }

}
