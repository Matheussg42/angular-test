import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { LojaService } from '../service/loja.service';

@Component({
  selector: 'app-loja-update',
  templateUrl: './loja-update.component.html',
  styleUrls: ['./loja-update.component.css']
})
export class LojaUpdateComponent implements OnInit {

  id: number = null;
  productForm: FormGroup;
  updateLojaErroForm: string
  nome: String = '';
  isLoadingResults = false;

  constructor(private router: Router, private route: ActivatedRoute, private api: LojaService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getLoja(this.route.snapshot.params['id']);
    this.productForm = this.formBuilder.group({
    'nome' : [null, Validators.required]
    })
  }

  getLoja(id) {
    this.api.showLoja(id).subscribe(res => {
      this.id = res.data.id;
      this.productForm.setValue({
        'nome': res.data.nome
      });
    });
  }

  updateLoja(form: NgForm) {
    this.isLoadingResults = true;
    this.api.updateLoja(this.id, form)
      .subscribe(res => {
          this.updateLojaErroForm = '';
          this.isLoadingResults = false;
          this.router.navigate(['/loja-show/' + this.id]);
        }, error => {
          this.updateLojaErroForm = error.error.error;
        });
  }
}
