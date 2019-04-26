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
          const id = res.data.id;
          this.isLoadingResults = false;
          this.router.navigate(['/produto-show', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
