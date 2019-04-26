import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { LojaService } from '../service/loja.service';

@Component({
  selector: 'app-loja-store',
  templateUrl: './loja-store.component.html',
  styleUrls: ['./loja-store.component.css']
})
export class LojaStoreComponent implements OnInit {

  productForm: FormGroup;
  storeLojaErroForm: string = '';
  isLoadingResults = false;

  constructor(private router: Router, private api: LojaService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      'nome' : [null, Validators.required],
    });
  }

  storeLoja(form: NgForm) {
    this.isLoadingResults = true;
    this.api.storeLoja(form)
      .subscribe(res => {
          this.storeLojaErroForm = '';
          const id = res.data.id;
          this.isLoadingResults = false;
          this.router.navigate(['/loja-show', id]);
        }, error => {
          this.storeLojaErroForm = error.error.error;
        });
  }

}
